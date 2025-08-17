import { Hero } from "./components/sections/Hero";

export default function Home() {
  const globeConfig = {
    pointSize: 0,
    globeColor: "#160747",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#160747",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "#ab8c2eff",
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
