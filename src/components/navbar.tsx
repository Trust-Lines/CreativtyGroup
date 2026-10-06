import Image from "next/image";
import Link from "next/link";

// Figma frame is 1592px wide; every size below is in design px multiplied by --u.
// Desktop scales with the navbar's own width (capped at 1441px like the page), mobile uses a fixed 0.6 scale.
const u = (n: number) => `calc(${n} * var(--u))`;

// x / w: position of each logo inside the 588px wide partners.svg
const partners = [
  { label: "T Lines Store Maker", href: "https://sm.tlines.us", x: 0, w: 122 },
  { label: "T Lines Premium Store Fitouts", href: "https://psf.tlines.us", x: 242, w: 119 },
  { label: "T Lines Design & Build", href: "https://db.tlines.us", x: 481, w: 107 },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 sm:px-6">
      {/* same width as the page content (hero), never full screen */}
      <div className="mx-auto w-full max-w-[1441px] [container-type:inline-size]">
        <div
          className="relative w-full [--u:0.6px] lg:[--u:calc(100cqw/1592)]"
          style={{ height: u(133) }}
        >
          <div
            className="absolute inset-x-0 top-0 bg-[#474747]"
            style={{ height: u(82) }}
            aria-hidden="true"
          />
          {/* logo tab */}
          <div
            className="absolute top-0 bg-[#474747]"
            style={{ left: u(108), width: u(234), height: u(133) }}
            aria-hidden="true"
          />

          <Link
            href="/"
            className="absolute"
            style={{ left: u(143), top: u(20), width: u(154), height: u(93) }}
          >
            <Image
              src="/navbar/logo.png"
              alt="Tlines Creativity Group"
              fill
              loading="eager"
              sizes="160px"
              className="object-cover"
            />
          </Link>

          {/* partner logos (desktop only, no room on small screens) */}
          <div
            className="absolute hidden lg:block"
            style={{ left: u(502), top: u(23), width: u(588), height: u(34) }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/navbar/partners.svg"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full"
            />
            {partners.map((partner) => (
              <a
                key={partner.href}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={partner.label}
                className="absolute inset-y-0 transition-opacity hover:opacity-80"
                style={{ left: `${(partner.x / 588) * 100}%`, width: `${(partner.w / 588) * 100}%` }}
              />
            ))}
          </div>

          {/* CTA button */}
          <a
            href="https://tshop-theta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-3 transition-opacity hover:opacity-90 lg:right-auto lg:left-[calc(1260*var(--u))]"
            style={{ top: u(20), width: u(193), height: u(45) }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/navbar/cta-button.svg"
              alt=""
              className="absolute inset-0 h-full w-full object-fill"
            />
            <div
              className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center text-white"
              style={{ left: "54.4%", top: "54.4%", width: "36.3%" }}
            >
              <p
                className="font-semibold tracking-[0.0126em]"
                style={{ fontSize: u(19), lineHeight: u(14) }}
              >
                T Shop
              </p>
              <p
                className="whitespace-nowrap font-normal tracking-[-0.01em]"
                style={{ fontSize: u(11), lineHeight: u(14) }}
              >
                Online Store
              </p>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
