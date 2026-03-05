const PageHeader = ({ eyebrow, title, description, action, compact = false }) => {
  const eyebrowClassName = compact
    ? "px-3 py-1 text-[10px] tracking-[0.18em]"
    : "px-3 py-1 text-[11px] tracking-[0.2em]";
  const titleClassName = compact
    ? "text-2xl md:text-3xl"
    : "text-3xl md:text-4xl";
  const descriptionClassName = compact
    ? "max-w-2xl space-y-2 text-sm leading-6 text-slate-300"
    : "max-w-2xl space-y-2 text-sm leading-7 text-slate-300 sm:text-base";

  return (
    <header className="space-y-4">
      {eyebrow ? (
        <p
          className={`inline-flex w-fit rounded-full border border-orange-400/40 bg-orange-400/14 font-semibold uppercase text-orange-50 ${eyebrowClassName}`}
        >
          {eyebrow}
        </p>
      ) : null}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-2.5">
          <h1 className={`font-semibold tracking-tight text-white ${titleClassName}`}>
            {title}
          </h1>
          {description ? (
            <div className={descriptionClassName}>
              {typeof description === "string" ? <p>{description}</p> : description}
            </div>
          ) : null}
        </div>

        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </header>
  );
};

export default PageHeader;
