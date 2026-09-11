import { Link } from "react-router-dom";
import PageHeader from "../components/ui/PageHeader";
import { aboutContent } from "../content/siteContent";
import ExperienceTimeline from "../features/about/ExperienceTimeline";
import ProgressiveImage from "../components/ui/ProgressiveImage";

const About = () => {
  return (
    <div className="space-y-12 sm:space-y-16">
      <PageHeader eyebrow="About" title={aboutContent.title} />

      <section className="border-t border-white/10 pt-8 sm:pt-10">
        <div className="space-y-8">
          <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-12">
            <article>
              <div className="space-y-5 text-base leading-8 text-slate-300">
                {aboutContent.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={index === 0 ? "text-lg leading-8 text-slate-100" : undefined}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>

            <figure className="overflow-hidden rounded-2xl bg-white/[0.03]">
              <ProgressiveImage
                src="/images/ajr2/ajr2_main.jpg"
                alt="AJR-2"
                className="h-full min-h-[260px] w-full"
                imageClassName="object-cover object-center"
                sizes="(min-width: 1024px) 390px, calc(100vw - 48px)"
              />
            </figure>
          </div>

          <div className="border-l-2 border-orange-400/70 pl-5">
            <p className="text-base leading-8 text-slate-200">
              제가 실제로 설계하고 시험한 내용은{" "}
              <Link
                to="/projects"
                className="font-semibold text-orange-200 underline decoration-orange-300/40 underline-offset-4 transition hover:text-orange-100 hover:decoration-orange-100"
              >
                Projects
              </Link>{" "}
              탭에서 확인해보실 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      <ExperienceTimeline />
    </div>
  );
};

export default About;
