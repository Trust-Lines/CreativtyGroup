import Image from "next/image";
import Link from "next/link";

const menuColumns = [
  {
    label: "Menu",
    links: ["Home", "News", "About us"],
  },
  {
    label: "News",
    links: ["Latest News", "Blog", "Events"],
  },
  {
    label: "About us",
    links: ["Our Story", "Our Mission", "Our Goal"],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white px-4 sm:px-6">
      <div className="mx-auto max-w-[1441px] bg-[#1a1a1a] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        {/* logo + brand badges */}
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div className="relative h-[70px] w-[117px] shrink-0 sm:h-[90px] sm:w-[150px] lg:h-[110px] lg:w-[183px]">
            <Image
              src="/footer/logo.png"
              alt="Tlines Creativity Group"
              fill
              className="object-contain object-left"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/footer/badge-store-maker.png"
              alt="T Lines Store Maker"
              className="h-[62px] w-auto sm:h-[81px]"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/footer/badge-fitout.svg"
              alt="T Lines Premium Store Fitout"
              className="h-[62px] w-auto sm:h-[81px]"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/footer/badge-design-build.svg"
              alt="T Lines Design & Build"
              className="h-[62px] w-auto sm:h-[81px]"
            />
          </div>
        </div>

        {/* newsletter + menu columns */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
          <div className="max-w-md">
            <h2 className="text-[32px] font-medium leading-[1.15] sm:text-[40px]">
              Subscribe to
              <br />
              our <span className="font-semibold">Newsletter</span>.
            </h2>

            <form className="mt-8 flex w-full max-w-[320px] items-center justify-between rounded-lg border border-white py-3 pl-4 pr-[18px]">
              <span className="text-base font-medium text-white">
                Submit your email
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/footer/arrow-email.svg"
                alt=""
                className="h-[23px] w-[23px]"
              />
            </form>

            <div className="mt-10">
              <p className="text-[18px] uppercase text-white/70">
                Follow us on
              </p>
              <div className="mt-4 flex items-center gap-[10px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/footer/social-1.svg"
                  alt="Instagram"
                  className="size-[49px]"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/footer/social-2.svg"
                  alt="YouTube"
                  className="size-[49px]"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/footer/social-3.svg"
                  alt="LinkedIn"
                  className="size-[49px]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-3 lg:flex lg:gap-[90px]">
            {menuColumns.map((column) => (
              <div key={column.label} className="flex flex-col gap-4">
                <p className="text-[18px] uppercase text-white/70">
                  {column.label}
                </p>
                <ul className="flex flex-col gap-[13px] text-[22px] font-semibold">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="hover:text-white/80">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* locations / call us */}
        <div className="mt-16 flex flex-wrap gap-12 lg:justify-end">
          <div className="flex flex-col items-start gap-6">
            <p className="text-[18px] uppercase text-white/70">Locations</p>
            <Link
              href="#"
              className="flex items-center gap-[5px] text-[22px] font-semibold underline decoration-solid underline-offset-2"
            >
              Atalanta, Georgia (GA)
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/footer/arrow-location.svg"
                alt=""
                className="size-[23px]"
              />
            </Link>
          </div>
          <div className="flex flex-col items-start gap-6">
            <p className="text-[18px] uppercase text-white/70">Call us</p>
            <a href="tel:8006603772" className="text-[22px] font-semibold">
              800-660-3772
            </a>
          </div>
        </div>

        {/* copyright */}
        <div className="mt-16 flex flex-col gap-2 text-[18px] text-white/30 sm:flex-row sm:justify-between">
          <p>All rights are reserved for TLines 2026</p>
          <p>All rights are reserved for TLines 2026</p>
        </div>
      </div>
    </footer>
  );
}
