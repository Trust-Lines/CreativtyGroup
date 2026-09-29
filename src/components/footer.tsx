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

const badges = [
  {
    src: "/footer/badge-store-maker.png",
    alt: "T Lines Store Maker",
    left: 27.889,
    url: "https://sm.tlines.us",
  },
  {
    src: "/footer/badge-fitout.svg",
    alt: "T Lines Premium Store Fitout",
    left: 49.435,
    url: "https://psf-five.vercel.app/",
  },
  {
    src: "/footer/badge-design-build.svg",
    alt: "T Lines Design & Build",
    left: 70.98,
    url: "https://designbuild-lime.vercel.app/",
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white px-4 sm:px-6">
      {/* mobile / tablet layout */}
      <div className="mx-auto flex w-full max-w-[1441px] flex-col gap-10 bg-[#474747] px-6 py-10 text-white sm:px-10 sm:py-12 lg:hidden">
        <div className="relative h-14 w-36">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/footer/logo.png"
            alt="Tlines Creativity Group"
            className="absolute inset-0 h-full w-full object-contain object-left"
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {badges.map((badge) => (
            <a
              key={badge.src}
              href={badge.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block aspect-[323/81] w-full max-w-[280px] transition-opacity hover:opacity-90 sm:max-w-none"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={badge.src} alt={badge.alt} className="absolute inset-0 h-full w-full object-contain object-left" />
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-[26px] font-medium leading-[1.25] sm:text-[32px]">
            Subscribe to
            <br />
            our <span className="font-semibold">Newsletter</span>.
          </h2>
          <form className="flex h-12 w-full max-w-sm items-center justify-between rounded-lg border border-white px-4">
            <span className="whitespace-nowrap text-sm font-medium text-white">Submit your email</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/footer/arrow-email.svg" alt="" className="h-5 w-5" />
          </form>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {menuColumns.map((column) => (
            <div key={column.label} className="flex flex-col gap-3">
              <p className="text-xs uppercase text-white/70">{column.label}</p>
              <ul className="flex flex-col gap-2 text-sm font-semibold sm:text-base">
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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase text-white/70">Locations</p>
            <Link
              href="#"
              className="flex items-center gap-1 text-base font-semibold underline decoration-solid underline-offset-2"
            >
              Atalanta, Georgia (GA)
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/footer/arrow-location.svg" alt="" className="h-5 w-5" />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase text-white/70">Call us</p>
            <a href="tel:8006603772" className="text-base font-semibold">
              800-660-3772
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase text-white/70">Follow us on</p>
          <div className="flex items-center gap-3">
            {["social-1", "social-2", "social-3"].map((name, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={name}
                src={`/footer/${name}.svg`}
                alt={["Instagram", "YouTube", "LinkedIn"][i]}
                className="h-10 w-10"
              />
            ))}
          </div>
        </div>

        <p className="border-t border-white/10 pt-6 text-xs text-white/30">All rights are reserved for TLines 2026</p>
      </div>

      <div
        className="relative mx-auto hidden w-full max-w-[1441px] overflow-hidden bg-[#474747] text-white [container-type:inline-size] lg:block"
        style={{ aspectRatio: "1592 / 727" }}
      >
        {/* logo */}
        <div
          className="absolute"
          style={{ left: "8.668%", top: "8.666%", width: "11.495%", height: "15.13%" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/footer/logo.png"
            alt="Tlines Creativity Group"
            className="absolute inset-0 h-full w-full object-contain object-left"
          />
        </div>

        {/* brand badges */}
        {badges.map((badge) => (
          <a
            key={badge.src}
            href={badge.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute transition-opacity hover:opacity-90"
            style={{ left: `${badge.left}%`, top: "11.141%", width: "20.288%", height: "11.141%" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={badge.src} alt={badge.alt} className="absolute inset-0 h-full w-full object-contain" />
          </a>
        ))}

        {/* newsletter heading */}
        <h2
          className="absolute font-medium leading-[1.25]"
          style={{ left: "8.668%", top: "34.251%", fontSize: "clamp(20px, 2.5126cqw, 40px)" }}
        >
          Subscribe to
          <br />
          our <span className="font-semibold">Newsletter</span>.
        </h2>

        {/* email form */}
        <form
          className="absolute flex items-center justify-between rounded-lg border border-white"
          style={{
            left: "8.668%",
            top: "53.096%",
            width: "20.101%",
            height: "6.603%",
            paddingLeft: "1.0050cqw",
            paddingRight: "1.1307cqw",
          }}
        >
          <span
            className="whitespace-nowrap font-medium text-white"
            style={{ fontSize: "clamp(12px, 1.0050cqw, 16px)" }}
          >
            Submit your email
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/footer/arrow-email.svg"
            alt=""
            style={{ width: "1.4447cqw", height: "1.4447cqw" }}
          />
        </form>

        {/* follow us on */}
        <div className="absolute" style={{ left: "8.668%", top: "68.226%" }}>
          <p
            className="uppercase text-white/70"
            style={{ fontSize: "clamp(12px, 1.1307cqw, 18px)" }}
          >
            Follow us on
          </p>
          <div className="mt-4 flex items-center" style={{ gap: "0.6281cqw" }}>
            {["social-1", "social-2", "social-3"].map((name, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={name}
                src={`/footer/${name}.svg`}
                alt={["Instagram", "YouTube", "LinkedIn"][i]}
                style={{ width: "3.0779cqw", height: "3.0779cqw" }}
              />
            ))}
          </div>
        </div>

        {/* menu columns */}
        <div
          className="absolute flex items-start justify-end"
          style={{ right: "8.731%", top: "35.626%", gap: "5.6533cqw" }}
        >
          {menuColumns.map((column) => (
            <div key={column.label} className="flex flex-col" style={{ gap: "1.0050cqw" }}>
              <p
                className="whitespace-nowrap uppercase text-white/70"
                style={{ fontSize: "clamp(12px, 1.1307cqw, 18px)" }}
              >
                {column.label}
              </p>
              <ul className="flex flex-col font-semibold" style={{ gap: "0.8166cqw" }}>
                {column.links.map((link) => (
                  <li key={link} className="whitespace-nowrap" style={{ fontSize: "clamp(14px, 1.3819cqw, 22px)" }}>
                    <Link href="#" className="hover:text-white/80">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* locations / call us */}
        <div
          className="absolute flex items-start justify-between"
          style={{ left: "56.283%", top: "70.014%", width: "34.987%" }}
        >
          <div className="flex flex-col" style={{ gap: "1.5075cqw" }}>
            <p
              className="whitespace-nowrap uppercase text-white/70"
              style={{ fontSize: "clamp(12px, 1.1307cqw, 18px)" }}
            >
              Locations
            </p>
            <Link
              href="#"
              className="flex items-center whitespace-nowrap font-semibold underline decoration-solid underline-offset-2"
              style={{ fontSize: "clamp(14px, 1.3819cqw, 22px)", gap: "0.3141cqw" }}
            >
              Atalanta, Georgia (GA)
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/footer/arrow-location.svg"
                alt=""
                style={{ width: "1.4447cqw", height: "1.4447cqw" }}
              />
            </Link>
          </div>
          <div className="flex flex-col" style={{ gap: "1.5075cqw" }}>
            <p
              className="whitespace-nowrap uppercase text-white/70"
              style={{ fontSize: "clamp(12px, 1.1307cqw, 18px)" }}
            >
              Call us
            </p>
            <a
              href="tel:8006603772"
              className="whitespace-nowrap font-semibold"
              style={{ fontSize: "clamp(14px, 1.3819cqw, 22px)" }}
            >
              800-660-3772
            </a>
          </div>
        </div>

        {/* copyright */}
        <p
          className="absolute text-white/30"
          style={{ left: "8.668%", top: "93.397%", width: "26.759%", fontSize: "clamp(11px, 1.1307cqw, 18px)" }}
        >
          All rights are reserved for TLines 2026
        </p>
        <p
          className="absolute text-right text-white/30"
          style={{ right: "8.731%", top: "93.397%", width: "27.45%", fontSize: "clamp(11px, 1.1307cqw, 18px)" }}
        >
          All rights are reserved for TLines 2026
        </p>
      </div>
    </footer>
  );
}
