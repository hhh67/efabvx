"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "top", label: "Top" },
  { id: "about", label: "About" },
  { id: "tech", label: "Tech" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function SideNav() {
  const [active, setActive] = useState<string>("top");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActive(id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    const targets = NAV_ITEMS.filter((i) => i.id !== "top")
      .map((i) => document.getElementById(i.id))
      .filter(Boolean) as HTMLElement[];
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = sectionId === "top" ? document.body : document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: sectionId === "top" ? "start" : "center"
      });
    }
  };

  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6">
      {NAV_ITEMS.map((item, index) => {
        const isActive = active === item.id;
        return (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="relative group cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Background circle with gradient */}
            <motion.div
              className={`absolute inset-0 w-6 h-6 -m-2 rounded-full transition-all duration-500 ${
                isActive
                  ? "bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-sm border border-blue-400/50"
                  : "bg-slate-800/20 backdrop-blur-sm border border-slate-600/30 group-hover:border-blue-400/50 group-hover:bg-gradient-to-r group-hover:from-blue-500/20 group-hover:to-purple-500/20"
              }`}
              initial={false}
              animate={{
                scale: isActive ? 1 : 0.8,
                opacity: isActive ? 1 : 0.6,
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Main indicator dot */}
            <motion.span
              className={`relative w-2 h-2 rounded-full block transition-all duration-300 ${
                isActive
                  ? "bg-blue-400 shadow-lg shadow-blue-400/50"
                  : "bg-slate-400/60 group-hover:bg-blue-300 group-hover:shadow-md group-hover:shadow-blue-300/30"
              }`}
              animate={{
                scale: isActive ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Label */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 
                           pointer-events-none whitespace-nowrap transition-all duration-300 
                           group-hover:translate-x-0 -translate-x-4 group-hover:scale-100 scale-90"
            >
              <div className="relative">
                {/* Main label background */}
                <div className="bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-xl 
                              px-4 py-3 rounded-xl shadow-2xl border border-slate-600/40
                              relative overflow-hidden">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 
                                animate-pulse" />
                  
                  {/* Label text */}
                  <span className="relative text-slate-100 font-semibold text-sm tracking-wide">
                    {item.label}
                  </span>
                  
                  {/* Accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400" />
                </div>
                
                {/* Arrow */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 
                              w-3 h-3 bg-gradient-to-br from-slate-900/95 to-slate-800/95 
                              rotate-45 border-l border-b border-slate-600/40" />
              </div>
            </div>
          </motion.button>
        );
      })}
    </nav>
  );
}
