import { Link } from "react-router-dom";
import { heroContent } from "../../content/siteContent";
import { resolveAssetPath } from "../../lib/assets";

const Hero = () => {
  return (
    <section className="relative min-h-[64vh] overflow-hidden rounded-[2rem] border border-orange-400/34 bg-[#040506] px-5 py-8 sm:min-h-[68vh] sm:px-7 md:px-9 md:py-12">
      <div className="absolute inset-0">
        <img
          src={resolveAssetPath("/images/wallpaper.jpg")}
          alt="Background"
          className="h-full w-full object-cover object-[80%_center] opacity-52"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,4,5,0.98)_0%,rgba(3,4,5,0.92)_22%,rgba(3,4,5,0.68)_46%,rgba(3,4,5,0.52)_68%,rgba(3,4,5,0.68)_100%),radial-gradient(circle_at_top_right,rgba(249,115,22,0.18),transparent_30%),linear-gradient(180deg,rgba(3,4,5,0.1),rgba(3,4,5,0.56))]" />
      </div>

      <div className="relative z-10 flex min-h-[calc(68vh-4rem)] items-end">
        <div className="max-w-3xl space-y-6 py-4 md:py-8">
          <div className="inline-flex w-fit items-center gap-3 rounded-full border border-orange-400/36 bg-orange-400/12 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-50">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-300 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-400" />
            </span>
            <span>{heroContent.status}</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {heroContent.name}
            </h1>
            <p className="bg-gradient-to-r from-orange-200 via-orange-400 to-amber-200 bg-clip-text text-xl font-semibold tracking-tight text-transparent sm:text-2xl">
              {heroContent.subTitle}
            </p>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-slate-200 sm:text-base md:text-lg">
            {heroContent.description}
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
            >
              {heroContent.ctaMain}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-orange-400/34 bg-black/30 px-5 py-3 text-sm font-semibold text-orange-100 transition hover:border-orange-300/55 hover:bg-orange-400/[0.12]"
            >
              {heroContent.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
