"use client";
import { Nebula } from "../visuals/Nebula";

export function BackgroundNebula() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Nebula />
    </div>
  );
}
