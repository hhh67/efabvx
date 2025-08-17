"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { ShaderMaterial, Vector2 } from "three";

const fragment = `
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform float uIntensity;
  uniform float uStarDensity; // 0..1 調整 (閾値へ影響)
  uniform float uStarBrightness; // 星輝度スケール
  // 追加パラメータ
  uniform float uNebulaContrast; // 既定 1.0 基準でコントラスト
  uniform float uNebulaSpeed;    // 動き速度倍率
  uniform float uParallax;       // 奥行き擬似パララックス強度
  
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

  // シンプル格子ハッシュ
  float cellHash(vec2 g){
    return fract(sin(dot(g, vec2(127.1, 311.7)))*43758.5453123);
  }
  // 単一スター層: scale は格子数、threshold は星出現確率制御
  float starLayer(vec2 uv, float scale, float threshold){
    vec2 g = floor(uv * scale);
    float h = cellHash(g);
    float present = step(threshold, h);
    // セル内位置 (中心に向かって明るく)
    vec2 f = fract(uv * scale) - 0.5;
    float falloff = 1.0 - smoothstep(0.0, 0.6, length(f));
    return present * falloff * h; // h で微妙な明滅差
  }

  void main(){
    // 正規化座標 (アスペクト補正)
    vec2 uv = vUv; 
    vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
    vec2 p = (uv - 0.5) * aspect;
    float r = length(p);

  float t = uTime * uNebulaSpeed;
  // 奥行きレイヤー (擬似パララックス) cameraZ 的距離差をレイヤーで表現
  vec2 nebCoord1 = uv*2.0 + 0.07*vec2(sin(t*0.10), cos(t*0.07));
  vec2 nebCoord2 = uv*2.6 + 0.09*vec2(sin(t*0.06+2.1), cos(t*0.05+1.4));
  vec2 nebCoord3 = uv*3.3 + 0.11*vec2(sin(t*0.04+4.2), cos(t*0.045+2.5));
  // パララックスオフセット（中央基準 p 利用）
  nebCoord2 += p * 0.15 * uParallax;
  nebCoord3 += p * 0.30 * uParallax;

  float n1 = fbm(nebCoord1 + 0.22*t*0.02);
  float n2 = fbm(nebCoord2*0.75 - 0.14*t*0.015 + 21.0);
  float n3 = fbm(nebCoord3*1.15 + 9.0 - 0.04*t);
  float n = mix(mix(n1, n2, 0.55), n3, 0.40);

    // 霞の強調
  float wisps = pow(n, 1.15 * uNebulaContrast);

    // カラーパレット (強めに調整)
    vec3 colDeep = vec3(0.01, 0.02, 0.07);
    vec3 colBlue = vec3(0.09, 0.22, 0.55);
    vec3 colPurple = vec3(0.42, 0.15, 0.62);
    vec3 colMagenta = vec3(0.85, 0.20, 0.60);
    vec3 colHighlight = vec3(1.35, 0.95, 0.55);

  vec3 neb = mix(colDeep, colBlue, smoothstep(0.05,0.32,wisps));
  neb = mix(neb, colPurple, smoothstep(0.20,0.56,wisps));
  neb = mix(neb, colMagenta, smoothstep(0.48,0.83,wisps));
  neb = mix(neb, colHighlight, smoothstep(0.78,0.97,wisps));

    // 中心グロー追加
  float glow = exp(-3.2*r*r);
  neb += glow * vec3(0.20,0.30,0.50);
  // 深部ティント (奥行き感)
  neb = mix(neb, vec3(0.02,0.04,0.10), clamp(r*0.55,0.0,1.0));

  // 既存小星 (旧方式) を廃し多層スターへ
  float baseThresh = mix(0.995, 0.96, uStarDensity); // 密度による閾値補正
  float layer1 = starLayer(uv + 10.0, 110.0, baseThresh); // 中粒
  float layer2 = starLayer(uv*1.3 + 40.0, 190.0, baseThresh + 0.01); // 小粒
  float layer3 = starLayer(uv*0.8 + 70.0, 70.0, baseThresh - 0.008); // 大粒やや疎
  float layer4 = starLayer((uv+vec2(0.37))*1.7, 260.0, baseThresh + 0.015); // 微細

  // 明滅 (time 基づく揺らぎ) - 各層独立位相
  layer1 *= (0.6 + 0.4*sin(t*2.1));
  layer2 *= (0.55 + 0.45*sin(t*2.7 + 1.3));
  layer3 *= (0.65 + 0.35*sin(t*1.9 + 2.1));
  layer4 *= (0.5 + 0.5*sin(t*3.3 + 4.2));

  float starsCombined = layer1 + layer2*0.7 + layer3*1.4 + layer4*0.45;
  // 軽トーンマップ前にスケール
  vec3 starCol = vec3(1.25,1.3,1.35) * starsCombined * uStarBrightness;

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

// フルスクリーントライアングル頂点シェーダー
const vertex = `
  varying vec2 vUv;
  void main(){
    // 3 つの頂点 ID に対応: gl_VertexID 0,1,2
    vec2 pos = vec2( (gl_VertexID == 2) ? 3.0 : -1.0, (gl_VertexID == 1) ? 3.0 : -1.0 );
    vUv = 0.5 * (pos + 1.0);
    gl_Position = vec4(pos, 0.0, 1.0);
  }
`;

function NebulaPlane() {
  const matRef = useRef<ShaderMaterial>(null!);
  const { size } = useThree();
  useFrame(({ clock }) => {
    if (!matRef.current) return;
    matRef.current.uniforms.uTime.value = clock.getElapsedTime();
    const res = matRef.current.uniforms.uResolution.value as Vector2;
    res.set(size.width, size.height);
  });
  return (
    <mesh>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={3}
          array={new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0])}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={matRef}
        fragmentShader={fragment}
        vertexShader={vertex}
        uniforms={{
          uTime: { value: 0 },
          uResolution: { value: new Vector2(1, 1) },
          uIntensity: { value: 1.25 },
          uStarDensity: { value: 0.65 },
          uStarBrightness: { value: 1.1 },
          uNebulaContrast: { value: 1.0 },
          uNebulaSpeed: { value: 1.0 },
          uParallax: { value: 1.0 },
        }}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
}

export function Nebula() {
  return (
    <Canvas
      className="absolute inset-0 !pointer-events-none"
      dpr={[1, 2]}
      orthographic
      camera={{ position: [0, 0, 1], near: 0.1, far: 10, zoom: 1 }}
    >
      <NebulaPlane />
    </Canvas>
  );
}
