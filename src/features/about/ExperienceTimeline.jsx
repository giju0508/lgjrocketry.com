import PageHeader from "../../components/ui/PageHeader";
import { experienceTimeline } from "../../content/siteContent";

const ExperienceTimeline = () => {
  return (
    <section className="space-y-8 border-t border-white/10 pt-10 sm:pt-12">
      <PageHeader eyebrow="Experience" title="My History" compact />

      <div className="relative pl-7 sm:pl-9">
        <div className="absolute bottom-0 left-1.5 top-2 w-px bg-gradient-to-b from-orange-300/60 via-white/15 to-white/5" />

        <div className="space-y-8 sm:space-y-10">
          {experienceTimeline.map((item) => (
            <article key={item.id} className="relative">
              <span className="absolute -left-[1.58rem] top-2 h-2.5 w-2.5 rounded-full bg-orange-300 sm:-left-[2.08rem]" />

              <div>
                <div className="flex flex-col gap-2 lg:flex-row lg:items-baseline lg:justify-between lg:gap-6">
                  <h3 className="max-w-2xl text-lg font-semibold leading-7 text-white sm:text-xl">
                    {item.role}
                  </h3>
                  <span className="shrink-0 text-sm text-slate-400">
                    {item.period}
                  </span>
                </div>

                <p className="mt-2 text-base font-medium text-orange-200">
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

                <p className="mt-3 max-w-3xl leading-7 text-slate-300">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
