"use client";

import { useEffect } from "react";

// Hero is 918px tall at its max width (1441px).
const HERO_MAX_HEIGHT = 918;
const DESKTOP_MIN_WIDTH = 1024;

// Zooms the whole site out (like browser zoom) on short desktop screens so the
// hero fits in the first screen. Never zooms in, so large screens are untouched.
export default function ScreenFit() {
  useEffect(() => {
    const root = document.documentElement;

    const update = () => {
      const zoom =
        window.innerWidth >= DESKTOP_MIN_WIDTH
          ? Math.min(1, window.innerHeight / HERO_MAX_HEIGHT)
          : 1;
      root.style.zoom = zoom < 1 ? String(zoom) : "";
    };

    update();
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
      root.style.zoom = "";
    };
  }, []);

  return null;
}
