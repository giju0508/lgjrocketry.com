const TagChip = ({
  children,
  active = false,
  interactive = false,
  onClick,
  count,
}) => {
  const baseClassName =
    "inline-flex items-center gap-2 rounded-full border px-3 text-xs font-medium transition-colors";
  const stateClassName = active
    ? "border-orange-300/45 bg-orange-400/10 text-orange-100"
    : "border-white/10 bg-white/[0.025] text-slate-300";

  if (interactive) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-pressed={active}
        className={`${baseClassName} ${stateClassName} min-h-11 py-2 hover:border-white/30 hover:bg-white/[0.06] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300`}
      >
        <span>{children}</span>
        {typeof count === "number" ? (
          <span className="text-xs tabular-nums opacity-70">
            {count}
          </span>
        ) : null}
      </button>
    );
  }

  return (
    <span className={`${baseClassName} ${stateClassName} py-1.5`}>
      <span>{children}</span>
      {typeof count === "number" ? (
        <span className="text-xs tabular-nums opacity-70">
          {count}
        </span>
      ) : null}
    </span>
  );
};

export default TagChip;
