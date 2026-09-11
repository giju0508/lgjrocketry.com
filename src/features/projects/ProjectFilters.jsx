import { useId, useState } from "react";
import TagChip from "../../components/ui/TagChip";
import { projectCategories } from "../../lib/projectCategories";

const ProjectFilters = ({
  availableTags,
  selectedTags,
  selectedCategory,
  countsByTag,
  onToggleTag,
  onSelectCategory,
  onClearFilters,
  totalCount,
  visibleCount,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const filtersId = useId();
  const activeCount = selectedTags.length + (selectedCategory === "all" ? 0 : 1);
  const categoryLabel = projectCategories.find(
    (category) => category.id === selectedCategory,
  )?.label;

  return (
    <section aria-label="Project filters" className="border-y border-white/10">
      <div className="flex items-center justify-between gap-4 py-4">
        <div className="min-w-0 space-y-1">
          <p aria-live="polite" aria-atomic="true" className="text-sm font-medium text-slate-200">
            {activeCount > 0 ? `${visibleCount} of ${totalCount}` : totalCount} projects
          </p>
          {activeCount > 0 ? (
            <p className="text-xs leading-relaxed text-slate-400">
              {[selectedCategory !== "all" ? categoryLabel : null, ...selectedTags]
                .filter(Boolean)
                .join(" · ")}
            </p>
          ) : null}
        </div>

        <button
          type="button"
          onClick={() => setIsExpanded((expanded) => !expanded)}
          aria-expanded={isExpanded}
          aria-controls={filtersId}
          className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300"
        >
          Filters
          {activeCount > 0 ? (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-400/15 px-1.5 text-xs text-orange-200">
              {activeCount}
            </span>
          ) : null}
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
          >
            <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div id={filtersId} hidden={!isExpanded} className="space-y-6 border-t border-white/10 pb-5 pt-5">
        <div role="group" aria-labelledby={`${filtersId}-categories`} className="space-y-3">
          <p id={`${filtersId}-categories`} className="text-sm font-medium text-slate-200">
            Project type
          </p>
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((category) => (
              <TagChip
                key={category.id}
                active={selectedCategory === category.id}
                interactive
                onClick={() => onSelectCategory(category.id)}
              >
                {category.label}
              </TagChip>
            ))}
          </div>
        </div>

        <div role="group" aria-labelledby={`${filtersId}-tags`} aria-describedby={`${filtersId}-hint`} className="space-y-3">
          <div className="space-y-1">
            <p id={`${filtersId}-tags`} className="text-sm font-medium text-slate-200">
              Refine by tag
            </p>
            <p id={`${filtersId}-hint`} className="text-xs leading-relaxed text-slate-400">
              Projects must match the type and every selected tag. Counts show matching projects.
            </p>
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
        </div>

        <button
          type="button"
          onClick={onClearFilters}
          disabled={activeCount === 0}
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Clear all filters
        </button>
      </div>
    </section>
  );
};

export default ProjectFilters;
