import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 sm:px-6">
      <div
        className="relative w-full max-w-[1441px] [container-type:inline-size]"
        style={{ aspectRatio: "1392.5 / 127.5738" }}
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
            style={{ top: "48.207%", height: "51.454%" }}
          />
        </div>

        {/* logo */}
        <Link
          href="/"
          className="absolute"
          style={{
            left: "9.3868%",
            top: "17.137%",
            width: "8.669%",
            height: "56.878%",
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
        <a
          href="https://tshop-theta.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute transition-opacity hover:opacity-90"
          style={{
            left: "88.365%",
            top: "17.119%",
            width: "9.5789%",
            height: "27.773%",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/navbar/cta-button.svg"
            alt=""
            className="absolute inset-0 h-full w-full object-fill"
          />
          <div
            className="absolute flex flex-col justify-center text-white"
            style={{
              left: "34.735%",
              top: "17.925%",
              width: "52.475%",
              height: "70.567%",
            }}
          >
            <p
              className="font-semibold leading-[1.1] tracking-[0.02em]"
              style={{ fontSize: "clamp(10px, 1.3645cqw, 19px)" }}
            >
              T Shop
            </p>
            <p
              className="font-normal leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(7px, 0.7899cqw, 11px)" }}
            >
              Online Store
            </p>
          </div>
        </a>
      </div>
    </header>
  );
}
