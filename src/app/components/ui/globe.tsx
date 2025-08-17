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

// カメラ距離: 値を小さくして画面上の地球サイズを拡大（1.5倍サイズ）
const cameraZ = 180;

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

  // Build & enhance ocean material (marble-like style) when ready
  useEffect(() => {
    if (!globeRef.current || !isInitialized) return;

    console.log("Applying marble shader to globe material"); // Debug log
    
    const material = globeRef.current.globeMaterial() as MeshPhongMaterial;
    const oceanBase = globeConfig.globeColor || "#1e3a5f"; // ocean blue base
    material.color = new Color(oceanBase);
    material.emissive = new Color(globeConfig.emissive || "#0a1929");
    material.emissiveIntensity = globeConfig.emissiveIntensity ?? 0.15;
    material.shininess = 60; // higher shininess for water-like reflection
    material.specular = new Color("#7fb3d3"); // bright water specular

    // Correct onBeforeCompile implementation
    material.onBeforeCompile = function(shader) {
        console.log("onBeforeCompile called"); // Debug log
        
        // Add custom uniforms
        shader.uniforms.uMarbleColor1 = { value: new Color("#ffffff") }; // pure white
        shader.uniforms.uMarbleColor2 = { value: new Color("#888888") }; // medium gray
        shader.uniforms.uMarbleColor3 = { value: new Color("#333333") }; // dark gray
        shader.uniforms.uMarbleScale = { value: 0.8 }; // marble pattern scale
        shader.uniforms.uTime = { value: 0 };

        // Modify vertex shader
        shader.vertexShader = shader.vertexShader.replace(
          'void main() {',
          `
          varying vec3 vWorldPosition;
          void main() {
            vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
          `
        );

        // Modify fragment shader
        shader.fragmentShader = shader.fragmentShader.replace(
          'void main() {',
          `
          varying vec3 vWorldPosition;
          uniform vec3 uMarbleColor1;
          uniform vec3 uMarbleColor2;
          uniform vec3 uMarbleColor3;
          uniform float uMarbleScale;
          uniform float uTime;
          void main() {
          `
        );

        shader.fragmentShader = shader.fragmentShader.replace(
          '#include <output_fragment>',
          `
          // Marble pattern
          vec3 pos = vWorldPosition * uMarbleScale;
          float t = uTime * 0.1;
          
          float pattern1 = sin(pos.x * 2.0 + t);
          float pattern2 = cos(pos.y * 1.5 + t * 0.7);
          float pattern3 = sin(pos.z * 1.8 + t * 0.5);
          
          float marble = (pattern1 + pattern2 + pattern3) * 0.33;
          marble = (marble + 1.0) * 0.5; // normalize to 0-1
          
          vec3 marbleColor;
          if (marble < 0.4) {
            marbleColor = uMarbleColor1;
          } else if (marble < 0.7) {
            marbleColor = uMarbleColor2;
          } else {
            marbleColor = uMarbleColor3;
          }
          
          // Mix with original color
          outgoingLight = mix(outgoingLight, marbleColor, 0.7);
          
          #include <output_fragment>
          `
        );

        // Store reference for animation
        (material as any).userData.shader = shader;
    };
    
    material.needsUpdate = true;
  }, [
    isInitialized,
    globeConfig.globeColor,
    globeConfig.emissive,
    globeConfig.emissiveIntensity,
  ]);

  // Animate marble shader time
  useFrame(() => {
    if (!globeRef.current) return;
    const material: any = globeRef.current.globeMaterial();
    const shader = material?.userData?.shader;
    if (shader?.uniforms?.uTime) {
      const t = performance.now() * 0.001;
      shader.uniforms.uTime.value = t;
    }
  });

  // Configure filled land polygons only (no arcs/points/rings)
  useEffect(() => {
    if (!globeRef.current || !isInitialized) return;
    // Only filled polygons, no arcs/rings/points
    globeRef.current
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.4)
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
    const r = 400; // distance of light from globe center (adjusted for closer camera)
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
      nightStrength: { value: 0.15 }, // much lighter night side
      softness: { value: 0.5 }, // softer transition
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
    <Canvas
      scene={scene}
      camera={{ fov: 80, near: 0.1, far: 2000, position: [0, 0, cameraZ] }}
    >
      <WebGLRendererConfig />
      <ambientLight color={globeConfig.ambientLight} intensity={1.4} />
      {/* Dynamic sun (directional) light based on time & timezone */}
      <directionalLight
        ref={sunLightRef as any}
        color={
          globeConfig.directionalTopLight || globeConfig.directionalLeftLight
        }
        position={new Vector3(0, 400, 400)}
        intensity={2.8}
      />
      {/* Enhanced fill lights for better visibility */}
      <directionalLight
        color={globeConfig.directionalLeftLight}
        position={new Vector3(-300, -200, -300)}
        intensity={1.2}
      />
      <directionalLight
        color="#ffffff"
        position={new Vector3(300, 200, 300)}
        intensity={0.8}
      />
      <pointLight
        color={globeConfig.pointLight}
        position={new Vector3(-200, 500, 200)}
        intensity={1.5}
      />
      <pointLight
        color="#e3f2fd"
        position={new Vector3(200, -300, -200)}
        intensity={0.7}
      />
      <Globe globeConfig={globeConfig} />
      <Terminator />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotateSpeed={props.globeConfig.autoRotateSpeed || 1}
        autoRotate={props.globeConfig.autoRotate || true}
        target={[0, 0, 0]}
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
