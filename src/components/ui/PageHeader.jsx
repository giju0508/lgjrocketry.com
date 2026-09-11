const PageHeader = ({ eyebrow, title, description, action, compact = false, as }) => {
  const Heading = as || (compact ? "h2" : "h1");
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
          className="text-xs font-medium tracking-[0.08em] text-orange-200"
        >
          {eyebrow}
        </p>
      ) : null}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-2.5">
          <Heading className={`font-semibold tracking-tight text-white ${titleClassName}`}>
            {title}
          </Heading>
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
