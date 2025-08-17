import { Hero } from "./components/sections/Hero";

export default function Home() {
  const globeConfig = {
    pointSize: 0,
    globeColor: "#16348D",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#16348D",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "#A98518",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    timeZoneOffsetHours: 9,
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  return (
    <>
      <Hero
        globeConfig={globeConfig}
        heading={
          <>
            <span className="text-blue-400">Hello, I'm</span>
            <br />
            Your Name
          </>
        }
        subheading={
          "Full-stack Developer / Engineer crafting immersive web experiences."
        }
      />
    </>
  );
}
