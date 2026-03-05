const TagChip = ({
  children,
  active = false,
  interactive = false,
  onClick,
  count,
}) => {
  const baseClassName =
    "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-semibold tracking-[0.02em] transition-all";
  const stateClassName = active
    ? "border-orange-300/55 bg-orange-400/14 text-orange-50 shadow-[0_0_0_1px_rgba(251,146,60,0.18)]"
    : "border-orange-400/24 bg-black/20 text-slate-300 hover:border-orange-300/40 hover:bg-orange-400/[0.08] hover:text-white";

  if (interactive) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-pressed={active}
        className={`${baseClassName} ${stateClassName}`}
      >
        <span>{children}</span>
        {typeof count === "number" ? (
          <span className="rounded-full bg-black/35 px-1.5 py-0.5 text-[10px] text-slate-300">
            {count}
          </span>
        ) : null}
      </button>
    );
  }

  return (
    <span className={`${baseClassName} ${stateClassName}`}>
      <span>{children}</span>
      {typeof count === "number" ? (
        <span className="rounded-full bg-black/35 px-1.5 py-0.5 text-[10px] text-slate-300">
          {count}
        </span>
      ) : null}
    </span>
  );
};

export default TagChip;
