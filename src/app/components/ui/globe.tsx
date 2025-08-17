"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import countries from "data/globe.json";
import { useEffect, useRef, useState } from "react";
import {
  Color,
  DirectionalLight,
  Fog,
  MeshPhongMaterial,
  PerspectiveCamera,
  Scene,
  ShaderMaterial,
  Vector3,
} from "three";
import ThreeGlobe from "three-globe";
declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: ThreeElements["mesh"] & {
      new (): ThreeGlobe;
    };
  }
}

extend({ ThreeGlobe: ThreeGlobe });

const aspect = 1.2;
const cameraZ = 300;

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  /** Time zone offset hours used to shift the "sun" position (e.g. 9 for JST). */
  timeZoneOffsetHours?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
}

export function Globe({ globeConfig }: WorldProps) {
  const globeRef = useRef<ThreeGlobe | null>(null);
  const groupRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const defaultProps = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    ...globeConfig,
  };

  // Initialize globe only once
  useEffect(() => {
    if (!globeRef.current && groupRef.current) {
      globeRef.current = new ThreeGlobe();
      (groupRef.current as any).add(globeRef.current);
      setIsInitialized(true);
    }
  }, []);

  // Build & enhance ocean material (lapis-lazuli style) when ready
  useEffect(() => {
    if (!globeRef.current || !isInitialized) return;

    const material = globeRef.current.globeMaterial() as MeshPhongMaterial;
    const deepBase = globeConfig.globeColor || "#062860"; // deep royal / lapis base
    material.color = new Color(deepBase);
    material.emissive = new Color(globeConfig.emissive || "#061836");
    material.emissiveIntensity = globeConfig.emissiveIntensity ?? 0.12;
    material.shininess = 25; // slightly broader highlight (larger specular diameter)
    material.specular = new Color("#2c4f9e"); // dimmer specular to avoid white hotspot

    // Inject custom shader only once
    if (!(material as any)._lapisShader) {
      (material as any)._lapisShader = true;
      material.onBeforeCompile = (shader) => {
  shader.uniforms.uFresnelStrength = { value: 0.28 }; // base fresnel
  shader.uniforms.uFresnelTint = { value: new Color("#0d49c4") };
  shader.uniforms.uDepthTint = { value: new Color("#03163a") };
  shader.uniforms.uGoldColor = { value: new Color("#c9a64d") };
  shader.uniforms.uGoldBaseDensity = { value: 0.03 }; // base probability
  shader.uniforms.uGoldVariationAmp = { value: 0.02 }; // additive variation
  shader.uniforms.uGoldStrength = { value: 0.9 };
  shader.uniforms.uTime = { value: 0 };
  shader.uniforms.uPhase = { value: 0 };
  shader.uniforms.uPhaseSpeed = { value: 0.15 };
  shader.uniforms.uSunDir = { value: new Color(1, 1, 1) }; // treated as direction
  shader.uniforms.uDayInfluence = { value: 1.0 };

        // capture view position for fresnel
        shader.vertexShader = shader.vertexShader.replace(
          "void main() {",
          "varying vec3 vWorldNormal; varying vec3 vWorldPos; void main(){ vWorldNormal = normalize(normalMatrix * normal); vWorldPos = (modelMatrix * vec4(position,1.0)).xyz;"
        );

        shader.fragmentShader = shader.fragmentShader
          .replace(
            "void main() {",
            `varying vec3 vWorldNormal; varying vec3 vWorldPos; uniform float uFresnelStrength; uniform vec3 uFresnelTint; uniform vec3 uDepthTint; uniform vec3 uGoldColor; uniform float uGoldBaseDensity; uniform float uGoldVariationAmp; uniform float uGoldStrength; uniform float uTime; uniform float uPhase; uniform float uPhaseSpeed; uniform vec3 uSunDir; uniform float uDayInfluence; void main(){`
          )
          .replace(
            "gl_FragColor = vec4( outgoingLight, diffuseColor.a );",
            `
              // base lighting
              vec3 N = normalize(vWorldNormal);
              vec3 V = normalize(cameraPosition - vWorldPos);
              float fres = pow(1.0 - max(dot(N,V),0.0), 2.0); // slightly softer fresnel rolloff
              // depth darkening toward edges of sphere (approx using normal.y & N.z)
              float depth = clamp(0.4 + 0.6 * (1.0 - max(N.y,0.0)), 0.0, 1.0);
              vec3 depthMix = mix(outgoingLight, outgoingLight * uDepthTint, depth * 0.55);
              // Soft highlight compression to avoid hard white circle
              float lum = dot(depthMix, vec3(0.299,0.587,0.114));
              float softLum = lum / (1.0 + lum * 0.9); // filmic-like tone map
              depthMix *= softLum / max(lum, 1e-4);
              vec3 fresTint = uFresnelTint * fres * uFresnelStrength;

              // simple hash noise for specks (pyrite inclusions)
              float phase = uPhase + uTime * uPhaseSpeed;
              vec2 hv = fract(vWorldPos.xz * 0.05 + phase);
              float h = fract(sin(dot(hv, vec2(127.1, 311.7))) * 43758.5453123);
              float dynamicDensity = uGoldBaseDensity + uGoldVariationAmp * (0.5 + 0.5*sin(phase));
              float viewTerm = pow(max(dot(N,V),0.0), 8.0);
              float dayTerm = clamp(dot(N, normalize(uSunDir)), 0.0, 1.0);
              // Gold specks brighter & more frequent on day side
              float threshold = 1.0 - dynamicDensity;
              float speckMask = step(threshold, h) * viewTerm;
              float goldBoost = mix(0.35, 1.0, pow(dayTerm, 1.2)) * uDayInfluence;
              vec3 gold = uGoldColor * speckMask * uGoldStrength * goldBoost;
              vec3 enriched = depthMix + fresTint + gold; // marble removed
              // preserve alpha
              gl_FragColor = vec4(enriched, diffuseColor.a);
            `
          );
        (material as any)._shaderRef = shader;
      };
      material.needsUpdate = true;
    }
  }, [
    isInitialized,
    globeConfig.globeColor,
    globeConfig.emissive,
    globeConfig.emissiveIntensity,
  ]);

  // Animate shader time for subtle gold speck shimmer & fresnel breathing
  useFrame(() => {
    if (!globeRef.current) return;
    const material: any = globeRef.current.globeMaterial();
    const shader = material?._shaderRef;
    if (shader?.uniforms?.uTime) {
      // seconds
      const t = performance.now() * 0.001;
      shader.uniforms.uTime.value = t;
      // Optional mild pulsation of fresnel strength (comment out if undesired)
      if (shader.uniforms.uFresnelStrength) {
        shader.uniforms.uFresnelStrength.value =
          0.26 + Math.sin(t * 0.2) * 0.02;
      }
      // advance phase (could be separate but reuse time)
      if (shader.uniforms.uPhase) shader.uniforms.uPhase.value = t * 0.05;
      // update sun direction locally for day/night modulation
      if (shader.uniforms.uSunDir) {
        // approximate same sun calc (duplicated logic simplified)
        const now = new Date();
        const startYear = Date.UTC(now.getUTCFullYear(), 0, 0);
        const dayIndex = Math.floor((now.getTime() - startYear) / 86400000);
        const utcHour =
          now.getUTCHours() +
          now.getUTCMinutes() / 60 +
          now.getUTCSeconds() / 3600;
        const localHour =
          (utcHour + (globeConfig.timeZoneOffsetHours || 0) + 24) % 24;
        const decl = 23.44 * Math.sin(((2 * Math.PI) / 365) * (dayIndex - 81));
        let subSolarLon = 180 - localHour * 15;
        subSolarLon = ((subSolarLon + 540) % 360) - 180;
        const latRad = (decl * Math.PI) / 180;
        const lonRad = (subSolarLon * Math.PI) / 180;
        const x = Math.cos(latRad) * Math.cos(lonRad);
        const y = Math.sin(latRad);
        const z = Math.cos(latRad) * Math.sin(lonRad);
        // store in Color (vec3)
        shader.uniforms.uSunDir.value.set(x, y, z);
      }
    }
  });

  // Configure filled land polygons only (no arcs/points/rings)
  useEffect(() => {
    if (!globeRef.current || !isInitialized) return;
    // Only filled polygons, no arcs/rings/points
    globeRef.current
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.2)
      .showAtmosphere(defaultProps.showAtmosphere)
      .atmosphereColor(defaultProps.atmosphereColor)
      .atmosphereAltitude(defaultProps.atmosphereAltitude)
      .hexPolygonColor(() => defaultProps.polygonColor)
      .arcsData([])
      .ringsData([])
      .pointsData([]);
  }, [
    isInitialized,
    defaultProps.showAtmosphere,
    defaultProps.atmosphereColor,
    defaultProps.atmosphereAltitude,
    defaultProps.polygonColor,
  ]);

  // Set initial view over Japan (override) once
  useEffect(() => {
    if (globeRef.current && isInitialized) {
      const jpn = { lat: 36.2048, lng: 138.2529, altitude: 2.2 };
      try {
        (globeRef.current as any).pointOfView(jpn, 0);
      } catch {}
    }
  }, [isInitialized]);

  // Rings / arcs animation removed for plain filled globe

  return <group ref={groupRef} />;
}

export function WebGLRendererConfig() {
  const { gl, size } = useThree();

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0xffaaff, 0);
  }, []);

  return null;
}

export function World(props: WorldProps) {
  const { globeConfig } = props;
  const scene = new Scene();
  scene.fog = new Fog(0xffffff, 400, 2000);
  const sunLightRef = useRef<DirectionalLight | null>(null);
  const terminatorMatRef = useRef<ShaderMaterial | null>(null);

  // Compute approximate sun (directional light) position given UTC time and a timezone offset shift
  function computeSunVector(date: Date, tzOffsetHours: number) {
    // Base UTC components
    const utc = date;
    const startYear = Date.UTC(utc.getUTCFullYear(), 0, 0);
    const dayOfYear = (utc.getTime() - startYear) / 86400000; // fractional
    const dayIndex = Math.floor(dayOfYear);
    const utcHour =
      utc.getUTCHours() + utc.getUTCMinutes() / 60 + utc.getUTCSeconds() / 3600;
    // Shift "solar time" by timezone offset to simulate local noon alignment
    const localHour =
      (utcHour + (globeConfig.timeZoneOffsetHours || tzOffsetHours) + 24) % 24;

    // Declination (approx) -23.44 to +23.44 deg (day 81 ~ March equinox)
    const decl = 23.44 * Math.sin(((2 * Math.PI) / 365) * (dayIndex - 81));
    // Subsolar longitude
    let subSolarLon = 180 - localHour * 15; // degrees
    subSolarLon = ((subSolarLon + 540) % 360) - 180; // normalize -180..180

    const latRad = (decl * Math.PI) / 180;
    const lonRad = (subSolarLon * Math.PI) / 180;
    const r = 600; // distance of light from globe center
    const x = r * Math.cos(latRad) * Math.cos(lonRad);
    const y = r * Math.sin(latRad);
    const z = r * Math.cos(latRad) * Math.sin(lonRad);
    return { x, y, z };
  }

  // Animate sun position (updates each animation frame for smooth progression)
  useEffect(() => {
    let frame: number;
    const update = () => {
      if (sunLightRef.current) {
        const now = new Date();
        const { x, y, z } = computeSunVector(now, 0); // default 0 uses provided config offset
        sunLightRef.current.position.set(x, y, z);
        if (terminatorMatRef.current) {
          const dir = new Vector3(x, y, z).normalize();
          (terminatorMatRef.current.uniforms as any).sunDir.value.copy(dir);
        }
      }
      frame = requestAnimationFrame(update);
    };
    update();
    return () => cancelAnimationFrame(frame);
  }, [globeConfig.timeZoneOffsetHours]);

  // Terminator overlay shader (darkens night side)
  const Terminator = () => {
    const uniforms = {
      sunDir: { value: new Vector3(0, 1, 0) },
      nightStrength: { value: 0.2 }, // slightly less dark nights
      softness: { value: 0.33 },
    };
    return (
      <mesh scale={[1.01, 1.01, 1.01]} position={[0, 0, 0]}>
        <sphereGeometry args={[100, 64, 64]} />
        <shaderMaterial
          ref={terminatorMatRef as any}
          transparent
          depthWrite={false}
          blending={1}
          uniforms={uniforms}
          vertexShader={`
            varying vec3 vNormal;
            void main(){
              vNormal = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
            }
          `}
          fragmentShader={`
            varying vec3 vNormal;
            uniform vec3 sunDir;
            uniform float nightStrength;
            uniform float softness;
            void main(){
              float d = dot(vNormal, normalize(sunDir));
              float light = smoothstep(-softness, softness, d);
              float darkness = (1.0 - light) * nightStrength;
              gl_FragColor = vec4(0.0,0.0,0.0,darkness);
            }
          `}
        />
      </mesh>
    );
  };
  return (
    <Canvas scene={scene} camera={new PerspectiveCamera(50, aspect, 180, 1800)}>
      <WebGLRendererConfig />
      <ambientLight color={globeConfig.ambientLight} intensity={0.85} />
      {/* Dynamic sun (directional) light based on time & timezone */}
      <directionalLight
        ref={sunLightRef as any}
        color={
          globeConfig.directionalTopLight || globeConfig.directionalLeftLight
        }
        position={new Vector3(0, 400, 400)}
        intensity={1.9}
      />
      {/* Optional static fill light for subtle shading */}
      <directionalLight
        color={globeConfig.directionalLeftLight}
        position={new Vector3(-300, -200, -300)}
        intensity={0.55}
      />
      <pointLight
        color={globeConfig.pointLight}
        position={new Vector3(-200, 500, 200)}
        intensity={0.8}
      />
  <Globe globeConfig={globeConfig} />
      <Terminator />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotateSpeed={1}
        autoRotate={true}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}

export function hexToRgb(hex: string) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function genRandomNumbers(min: number, max: number, count: number) {
  const arr = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  return arr;
}
