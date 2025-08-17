"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { ShaderMaterial, Vector2 } from "three";

const fragment = `
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform float uIntensity;
  
  // hash & noise helpers
  float hash(vec2 p){
    p = fract(p*0.3183099 + vec2(0.71,0.113));
    return fract(23.17 * p.x * p.y);
  }
  float noise(vec2 p){
    vec2 i = floor(p);
    vec2 f = fract(p);
    // smoothstep
    vec2 u = f*f*(3.0-2.0*f);
    float a = hash(i);
    float b = hash(i+vec2(1.,0.));
    float c = hash(i+vec2(0.,1.));
    float d = hash(i+vec2(1.,1.));
    return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
  }
  mat2 rot(float a){ float c = cos(a), s = sin(a); return mat2(c,-s,s,c); }
  float fbm(vec2 p){
    float v = 0.0;
    float amp = 0.5;
    for(int i=0;i<6;i++){
      v += noise(p)*amp;
      p = rot(1.5708)*p*1.9 + 0.37;
      amp *= 0.5;
    }
    return v;
  }

  void main(){
    // 正規化座標 (アスペクト補正)
    vec2 uv = vUv; 
    vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
    vec2 p = (uv - 0.5) * aspect;
    float r = length(p);

    // 動きのあるサンプル座標
    vec2 q = uv*2.3;
    q += 0.08 * sin(uTime*0.05);
    q += 0.04 * vec2(sin(uTime*0.11), cos(uTime*0.09));

    float n1 = fbm(q + 0.25*uTime*0.02);
    float n2 = fbm(q*0.55 - 0.18*uTime*0.015 + 37.0);
    float n3 = fbm(q*1.2 + 12.0 - 0.05*uTime);
    float n = mix(mix(n1, n2, 0.5), n3, 0.35);

    // 霞の強調
    float wisps = pow(n, 1.25);

    // カラーパレット (強めに調整)
    vec3 colDeep = vec3(0.01, 0.02, 0.07);
    vec3 colBlue = vec3(0.09, 0.22, 0.55);
    vec3 colPurple = vec3(0.42, 0.15, 0.62);
    vec3 colMagenta = vec3(0.85, 0.20, 0.60);
    vec3 colHighlight = vec3(1.35, 0.95, 0.55);

    vec3 neb = mix(colDeep, colBlue, smoothstep(0.05,0.30,wisps));
    neb = mix(neb, colPurple, smoothstep(0.22,0.55,wisps));
    neb = mix(neb, colMagenta, smoothstep(0.50,0.82,wisps));
    neb = mix(neb, colHighlight, smoothstep(0.80,0.97,wisps));

    // 中心グロー追加
    float glow = exp(-4.0*r*r);
    neb += glow * vec3(0.25,0.35,0.55);

    // 星 (閾値少し下げて密度↑)
    vec2 starUV = uv*vec2(1.0,1.0) + 200.0;
    float starNoise = noise(starUV*140.0 + uTime*0.02);
    float starHash = noise(starUV*260.0 + 23.0);
    float starMask = step(0.992, starNoise) * pow(starHash, 10.0);
    float tw = 0.5 + 0.5*sin(uTime*2.2 + starHash*60.0);
    vec3 starCol = vec3(1.4,1.4,1.45) * starMask * tw;

    // ビネット (外側暗すぎないよう調整)
    float vign = smoothstep(1.1, 0.15, r);
    neb *= vign;

    vec3 color = (neb + starCol) * uIntensity;
    // トーンマップ + 軽いガンマ
    color = color / (1.0 + color);
    color = pow(color, vec3(0.95));

    gl_FragColor = vec4(color, 1.0);
  }
`;

const vertex = `
  varying vec2 vUv;
  void main(){
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

function NebulaPlane(){
  const matRef = useRef<ShaderMaterial>(null!);
  const { size } = useThree();
  useFrame(({ clock }) => {
    if(matRef.current){
      matRef.current.uniforms.uTime.value = clock.getElapsedTime();
  const res = matRef.current.uniforms.uResolution.value as Vector2;
  res.set(size.width, size.height);
    }
  });
  return (
    <mesh scale={[20,20,1]} position={[0,0,0]}>
      <planeGeometry args={[1,1,1,1]} />
      <shaderMaterial
        ref={matRef}
        fragmentShader={fragment}
        vertexShader={vertex}
        uniforms={{ uTime: { value: 0 }, uResolution: { value: new Vector2(1,1) }, uIntensity: { value: 1.25 } }}
        transparent={false}
      />
    </mesh>
  );
}

export function Nebula(){
  return (
    <Canvas className="absolute inset-0 !pointer-events-none" dpr={[1,2]} camera={{ position: [0,0,5], fov: 50 }}>
      <NebulaPlane />
    </Canvas>
  );
}
