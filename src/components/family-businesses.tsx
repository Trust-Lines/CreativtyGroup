import SectionTitle from "@/components/section-title";

type Business = {
  key: string;
  bgColor: string;
  tint: string;
  photo: string;
  banner: string;
  brand: string;
  brandRatio: number;
  logo: { left: number; top: number; width: number; height: number };
  captionLines: string[];
  url: string;
};

const businesses: Business[] = [
  {
    key: "store-maker",
    bgColor: "#204631",
    tint: "rgba(32,70,49,0.25)",
    photo: "/family/photo-store-maker.png",
    banner: "/family/banner-store-maker.svg",
    brand: "/family/brand-store-maker.svg",
    brandRatio: 244 / 64,
    logo: { left: 21.81, top: 55.2, width: 56.61, height: 8.43 },
    captionLines: ["Get 5% off all your projects discussed with our team at the booth."],
    url: "https://sm.tlines.us",
  },
  {
    key: "fitouts",
    bgColor: "#46284B",
    tint: "rgba(72,46,79,0.15)",
    photo: "/family/photo-fitouts.png",
    banner: "/family/banner-fitouts.svg",
    brand: "/family/brand-fitouts.svg",
    brandRatio: 239 / 68,
    logo: { left: 22.27, top: 54.94, width: 55.45, height: 8.96 },
    captionLines: ["Bring your project,", "Start with a complimentary initial store design."],
    url: "https://psf-five.vercel.app/",
  },
  {
    key: "design-build",
    bgColor: "#334B65",
    tint: "rgba(51,74,100,0.2)",
    photo: "/family/photo-design-build.png",
    banner: "/family/banner-design-build.svg",
    brand: "/family/brand-design-build.svg",
    brandRatio: 216 / 60,
    logo: { left: 25.06, top: 55.47, width: 50.12, height: 7.91 },
    captionLines: ["Pick up your special gift at our booth while the supply lasts."],
    url: "https://designbuild-lime.vercel.app/",
  },
];

function BusinessCard({ business }: { business: Business }) {
  return (
    <a
      href={business.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block w-full overflow-hidden transition-opacity hover:opacity-90 [container-type:inline-size]"
      style={{ aspectRatio: "431 / 759", backgroundColor: business.bgColor }}
    >
      {/* photo */}
      <div
        className="absolute overflow-hidden"
        style={{ left: "2.784%", top: "1.713%", width: "94.43%", height: "57.97%" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={business.photo} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: business.tint }} />
      </div>

      {/* angled banner strip */}
      <div
        className="absolute"
        style={{ left: "2.32%", top: "53.36%", width: "97.68%", height: "12.65%" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={business.banner} alt="" className="absolute inset-0 h-full w-full object-fill" />
      </div>

      {/* brand logo */}
      <div
        className="absolute"
        style={{
          left: `${business.logo.left}%`,
          top: `${business.logo.top}%`,
          width: `${business.logo.width}%`,
          height: `${business.logo.height}%`,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={business.brand}
          alt=""
          className="absolute inset-0 h-full w-full object-contain object-left"
        />
      </div>

      {/* caption */}
      <div
        className="absolute text-justify font-normal leading-[1.25] text-white"
        style={{
          left: "11.83%",
          top: "69.43%",
          width: "76.57%",
          fontSize: "clamp(14px, 5.1046cqw, 22px)",
        }}
      >
        {business.captionLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </a>
  );
}

export default function FamilyBusinesses() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1441px]">
        <SectionTitle>
          <span className="font-bold">T-lines</span> family
          <br />
          of businesses
        </SectionTitle>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4">
          {businesses.map((business) => (
            <BusinessCard key={business.key} business={business} />
          ))}
        </div>
      </div>
    </section>
  );
}
