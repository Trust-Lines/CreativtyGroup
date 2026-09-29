import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 sm:px-6">
      {/* mobile / tablet bar: same notched shape as desktop, with a fixed-size notch */}
      <div className="relative h-[88px] w-full lg:hidden">
        <div className="absolute inset-0 -z-10 flex" aria-hidden="true">
          <svg viewBox="0 0 190 88" className="h-full w-[190px] shrink-0" fill="none">
            <path d="M0 0H190V44L105 83C98.5 85.5 91.5 85.5 85 83L0 44Z" fill="#474747" />
            <path d="M0 44L85 83C91.5 85.5 98.5 85.5 105 83L190 44" stroke="white" strokeWidth="2" />
          </svg>
          <svg viewBox="0 0 100 88" preserveAspectRatio="none" className="-ml-px h-full flex-1" fill="none">
            <path d="M0 0H100V48L0 44Z" fill="#474747" />
            <path d="M0 44L100 48" stroke="white" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>

        <Link href="/" className="absolute left-[55px] top-[10px] h-[48px] w-[80px]">
          <Image
            src="/navbar/logo.png"
            alt="Tlines Creativity Group"
            fill
            loading="eager"
            sizes="80px"
            className="object-contain"
          />
        </Link>

        <a
          href="https://tshop-theta.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-3 top-[7px] h-[30px] w-[113px] transition-opacity hover:opacity-90"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/navbar/cta-button.svg"
            alt=""
            className="absolute inset-0 h-full w-full object-fill"
          />
          <div className="absolute inset-y-0 left-[34.7%] flex flex-col justify-center text-white">
            <p className="text-[12px] font-semibold leading-[1.1] tracking-[0.02em]">T Shop</p>
            <p className="text-[8px] font-normal leading-[1.1] tracking-[-0.02em]">Online Store</p>
          </div>
        </a>
      </div>

      <div
        className="relative hidden w-full max-w-[1441px] [container-type:inline-size] lg:block"
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
            loading="eager"
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
