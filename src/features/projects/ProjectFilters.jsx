import TagChip from "../../components/ui/TagChip";

const ProjectFilters = ({
  availableTags,
  selectedTags,
  countsByTag,
  onToggleTag,
  onClearTags,
  totalCount,
  visibleCount,
}) => {
  return (
    <section className="space-y-4 rounded-3xl border border-orange-400/30 bg-black/25 px-4 py-4 backdrop-blur-xl sm:px-5">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
            Filter by Tags
          </p>
          <p className="text-sm text-slate-300">
            Showing {visibleCount} of {totalCount} projects
          </p>
        </div>

        <button
          type="button"
          onClick={onClearTags}
          disabled={selectedTags.length === 0}
          className="inline-flex w-fit items-center justify-center rounded-full border border-orange-400/24 bg-black/30 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-orange-300/42 hover:bg-orange-400/[0.08] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Clear Filters
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {availableTags.map((tag) => (
          <TagChip
            key={tag}
            active={selectedTags.includes(tag)}
            interactive
            onClick={() => onToggleTag(tag)}
            count={countsByTag[tag]}
          >
            {tag}
          </TagChip>
        ))}
      </div>
    </section>
  );
};

export default ProjectFilters;
