"use client";
import dynamic from "next/dynamic";

const World = dynamic(
  () => import("../components/ui/globe").then((m) => m.World),
  {
    ssr: false,
  }
);

export function GlobeDemo() {
  const globeConfig = {
    pointSize: 0, // no points
    globeColor: "#16348D", // ocean color
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#16348D",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "#A98518", // land fill color
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    timeZoneOffsetHours: 9, // JST
    arcTime: 0,
    arcLength: 0,
    rings: 0,
    maxRings: 0,
    // Start viewpoint roughly over Japan
    initialPosition: { lat: 36.2048, lng: 138.2529 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  // pass empty data to suppress arcs/points/rings
  const sampleArcs: any[] = [];

  return (
    <div className="relative flex items-center justify-center h-screen w-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <World data={sampleArcs} globeConfig={globeConfig} />
      </div>
    </div>
  );
}
