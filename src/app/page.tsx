import { SideNav } from "./components/layout/SideNav";
import { AboutSection } from "./components/sections/About";
import { ContactSection } from "./components/sections/Contact";
import { Hero } from "./components/sections/Hero";
import { ProjectsSection } from "./components/sections/Projects";
import { TechStackSection } from "./components/sections/TechStack";

export default function Home() {
  const globeConfig = {
    pointSize: 0,
    globeColor: "#2c5aa0", // brighter ocean blue
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#1a365d", // brighter emissive
    emissiveIntensity: 0.2, // increased intensity
    shininess: 0.9,
    polygonColor: "#ffffffff", // brighter gold for land
    ambientLight: "#87ceeb", // sky blue ambient
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    timeZoneOffsetHours: 9,
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  return (
    <>
      <SideNav />
      <div id="top">
        <Hero
          globeConfig={globeConfig}
          heading={
            <>
              <span className="text-blue-400">Hello, I'm</span>
              <br />
              Your Name
            </>
          }
          subheading={"Full Stack Developer"}
        />
      </div>
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
