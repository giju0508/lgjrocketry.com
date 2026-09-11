import PageHeader from "../../components/ui/PageHeader";
import { experienceTimeline } from "../../content/siteContent";

const ExperienceTimeline = () => {
  return (
    <section className="space-y-6">
      <PageHeader eyebrow="Experience" title="My History" compact />

      <div className="relative pl-7">
        <div className="absolute left-2 top-3 h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-orange-300/80 via-orange-400/55 to-orange-500/10" />

        <div className="space-y-5">
          {experienceTimeline.map((item) => (
            <article key={item.id} className="relative">
              <span className="absolute -left-[1.52rem] top-7 h-3 w-3 rounded-full bg-orange-300 shadow-[0_0_0_6px_rgba(251,146,60,0.12)]" />

              <div className="rounded-3xl border border-orange-400/28 bg-black/25 px-5 py-5 backdrop-blur-xl sm:px-6 sm:py-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    {item.role}
                  </h3>
                  <span className="inline-flex rounded-full border border-orange-300/35 bg-orange-400/[0.08] px-3 py-1 text-xs font-semibold text-orange-100 sm:text-sm">
                    {item.period}
                  </span>
                </div>

                <p className="mt-2 text-sm font-medium text-orange-200">
                  {item.companyUrl ? (
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-sm underline decoration-orange-300/45 underline-offset-4 transition hover:text-orange-100 hover:decoration-orange-100 focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#05070b]"
                    >
                      @{item.company}
                    </a>
                  ) : (
                    <>@{item.company}</>
                  )}
                </p>

                <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
