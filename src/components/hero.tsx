const videoSrc = "/hero/web-video.mp4";

export default function Hero() {
  return (
    <section className="w-full bg-white px-4 sm:px-6">
      <div className="relative mx-auto aspect-[4/5] w-full max-w-[1441px] overflow-hidden bg-[#474747] sm:aspect-[4/3] lg:aspect-[1440/918]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Tlines mağaza içi tasarım çözümleri"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
