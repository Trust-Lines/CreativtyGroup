const overlaySvg =
  "<svg viewBox='0 0 1440 918' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'>" +
  "<rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.7'/>" +
  "<defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' " +
  "gradientTransform='matrix(0.099998 53.9 -84.549 0.15686 291 491)'>" +
  "<stop stop-color='rgba(25,25,25,1)' offset='0.18619'/>" +
  "<stop stop-color='rgba(25,25,25,0)' offset='0.6332'/>" +
  "</radialGradient></defs></svg>";

export default function Hero() {
  return (
    <section className="w-full bg-white px-4 sm:px-6">
      <div
        className="relative mx-auto w-full max-w-[1441px] overflow-hidden bg-[#191919]"
        style={{ aspectRatio: "1440 / 918" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero/bg.png"
          alt="Tlines mağaza içi tasarım çözümleri"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(overlaySvg)}"), linear-gradient(180deg, rgb(25, 25, 25) 11.662%, rgba(25, 25, 25, 0) 25.892%)`,
            backgroundSize: "100% 100%",
          }}
        />

        <div className="relative flex h-full items-end p-6 sm:p-10 lg:p-14">
          <h1 className="text-[32px] font-medium uppercase leading-[1.08] tracking-[-0.03em] text-white sm:text-[44px] lg:text-[60px]">
            Solutions
            <br />
            we offer..
          </h1>
        </div>
      </div>
    </section>
  );
}
