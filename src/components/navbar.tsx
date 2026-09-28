import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 sm:px-6">
      <div
        className="relative w-full max-w-[1441px] [container-type:inline-size]"
        style={{ aspectRatio: "1441 / 176.3556" }}
      >
        {/* decorative background */}
        <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/navbar/bg-inner.svg"
            alt=""
            className="absolute inset-0 h-full w-full object-fill"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/navbar/bg-outer.svg"
            alt=""
            className="absolute inset-x-0 w-full object-fill"
            style={{ top: "56.7057%", height: "43.0369%" }}
          />
        </div>

        {/* logo */}
        <Link
          href="/"
          className="absolute"
          style={{
            left: "7.8071%",
            top: "18.1462%",
            width: "10.9646%",
            height: "53.8681%",
          }}
        >
          <Image
            src="/navbar/logo.png"
            alt="Tlines Creativity Group"
            fill
            priority
            className="object-contain object-left"
          />
        </Link>

        {/* CTA button */}
        <Link
          href="#contact"
          className="absolute flex items-center rounded-full bg-[#c14040] transition-colors hover:bg-[#a83636]"
          style={{
            left: "83.1714%",
            top: "18.7127%",
            width: "14.3650%",
            height: "28.3512%",
            paddingLeft: "0.48577cqw",
            paddingRight: "0.97155cqw",
            gap: "1.04094cqw",
          }}
        >
          <span
            className="relative block shrink-0"
            style={{ width: "2.84525cqw", height: "2.77585cqw" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/navbar/cta-icon.svg"
              alt=""
              className="absolute inset-0 h-full w-full object-contain"
            />
          </span>
          <span
            className="whitespace-nowrap font-bold text-white tracking-[0.02em]"
            style={{ fontSize: "clamp(11px, 1.1797cqw, 17px)" }}
          >
            Fit Your Store
          </span>
        </Link>
      </div>
    </header>
  );
}
