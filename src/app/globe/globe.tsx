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
    // Start viewpoint roughly over Japan
    initialPosition: { lat: 36.2048, lng: 138.2529 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  return (
    <div className="relative flex items-center justify-center h-screen w-screen overflow-hidden">
      <div className="absolute inset-0">
        <World globeConfig={globeConfig} />
      </div>
    </div>
  );
}
