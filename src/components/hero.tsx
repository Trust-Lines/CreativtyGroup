"use client";

import { useEffect, useState } from "react";

const desktopSrc = "/hero/web-video.mp4";
const mobileSrc = "/hero/web-video-mobile.mp4";

export default function Hero() {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const update = () => setSrc(mq.matches ? desktopSrc : mobileSrc);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section className="w-full bg-white sm:px-6">
      <div className="relative mx-auto aspect-[9/16] w-full max-w-[1441px] overflow-hidden sm:max-w-[min(1441px,calc(100svh*4/3))] lg:max-w-[min(1441px,calc(100svh*1440/918))] bg-[#474747] sm:aspect-[4/3] lg:aspect-[1440/918]">
        {src && (
          <video
            key={src}
            className="absolute inset-0 h-full w-full object-cover"
            src={src}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Tlines mağaza içi tasarım çözümleri"
          />
        )}
      </div>
    </section>
  );
}
