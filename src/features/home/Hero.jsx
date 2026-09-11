import { Link } from "react-router-dom";
import { heroContent } from "../../content/siteContent";
import ProgressiveImage from "../../components/ui/ProgressiveImage";

const Hero = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#040506] px-6 py-8 ring-1 ring-white/10 sm:px-8 sm:py-12 md:px-10">
      <div className="absolute inset-0">
        <ProgressiveImage
          src="/images/wallpaper.jpg"
          alt=""
          className="h-full w-full opacity-52"
          imageClassName="object-cover object-[80%_center]"
          sizes="(min-width: 1080px) max(1016px, 110vh), max(calc(100vw - 32px), 110vh)"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,4,5,0.98)_0%,rgba(3,4,5,0.92)_22%,rgba(3,4,5,0.68)_46%,rgba(3,4,5,0.52)_68%,rgba(3,4,5,0.68)_100%),radial-gradient(circle_at_top_right,rgba(249,115,22,0.18),transparent_30%),linear-gradient(180deg,rgba(3,4,5,0.1),rgba(3,4,5,0.56))]" />
      </div>

      <div className="relative z-10 flex items-center sm:min-h-[360px] md:min-h-[400px]">
        <div className="max-w-3xl space-y-5 sm:space-y-6">
          <div className="inline-flex w-fit items-center gap-3 text-xs font-medium tracking-wide text-orange-100">
            <span className="relative flex h-2.5 w-2.5">
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-400" />
            </span>
            <span>{heroContent.status}</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {heroContent.name}
            </h1>
            <p className="text-xl font-medium leading-snug tracking-tight text-orange-300 sm:text-2xl">
              {heroContent.subTitle}
            </p>
          </div>

          <p className="max-w-xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7 md:text-lg">
            {heroContent.description}
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              to="/projects"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-400"
            >
              {heroContent.ctaMain}
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 bg-black/30 px-5 py-3 text-sm font-medium text-white transition hover:border-orange-300/55 hover:bg-white/5"
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
