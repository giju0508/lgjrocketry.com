import { Link } from "react-router-dom";
import PageHeader from "../components/ui/PageHeader";
import { aboutContent } from "../content/siteContent";
import ExperienceTimeline from "../features/about/ExperienceTimeline";
import { resolveAssetPath } from "../lib/assets";

const About = () => {
  const aboutImage = resolveAssetPath("/images/ajr2/ajr2_main.jpg");

  return (
    <div className="space-y-10">
      <PageHeader eyebrow="About" title={aboutContent.title} />

      <section className="rounded-[2rem] border border-orange-400/30 bg-black/25 px-6 py-6 backdrop-blur-xl sm:px-8 sm:py-8">
        <div className="mx-auto max-w-5xl space-y-5">
          <div className="grid items-stretch gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <article className="rounded-2xl border border-orange-400/20 bg-black/25 px-5 py-5 sm:px-6 sm:py-6">
              <div className="space-y-4 text-base leading-8 text-slate-300">
                {aboutContent.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </article>

            <figure className="overflow-hidden rounded-2xl border border-orange-400/24 bg-black/25">
              <img
                src={aboutImage}
                alt="AJR-2"
                className="h-full min-h-[260px] w-full object-cover object-center"
                loading="lazy"
              />
            </figure>
          </div>

          <div className="rounded-2xl border border-orange-400/24 bg-orange-400/[0.07] px-5 py-4">
            <p className="text-base leading-8 text-slate-200">
              제가 실제로 설계하고 시험한 내용은{" "}
              <Link
                to="/projects"
                className="font-semibold text-orange-200 transition hover:text-orange-100"
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
