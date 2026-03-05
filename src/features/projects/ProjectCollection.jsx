import {
  startTransition,
  useDeferredValue,
  useMemo,
  useState,
} from "react";
import EmptyState from "../../components/ui/EmptyState";
import { projectTags } from "../../content/projects";
import ProjectCard from "./ProjectCard";
import ProjectFilters from "./ProjectFilters";

const ProjectCollection = ({
  items,
  enableFilters = false,
  limit,
  emptyTitle = "No projects found",
  emptyDescription = "Try removing a few filters and check again.",
}) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const deferredSelectedTags = useDeferredValue(selectedTags);

  const countsByTag = useMemo(
    () =>
      projectTags.reduce((accumulator, tag) => {
        accumulator[tag] = items.filter((project) => project.tags.includes(tag)).length;
        return accumulator;
      }, {}),
    [items],
  );

  const filteredItems = useMemo(() => {
    if (!enableFilters || deferredSelectedTags.length === 0) {
      return items;
    }

    return items.filter((project) =>
      deferredSelectedTags.every((tag) => project.tags.includes(tag)),
    );
  }, [deferredSelectedTags, enableFilters, items]);

  const visibleItems = useMemo(() => {
    if (typeof limit === "number") {
      return filteredItems.slice(0, limit);
    }

    return filteredItems;
  }, [filteredItems, limit]);

  const toggleTag = (tag) => {
    startTransition(() => {
      setSelectedTags((currentTags) =>
        currentTags.includes(tag)
          ? currentTags.filter((value) => value !== tag)
          : [...currentTags, tag],
      );
    });
  };

  const clearTags = () => {
    startTransition(() => {
      setSelectedTags([]);
    });
  };

  return (
    <section className="space-y-6">
      {enableFilters ? (
        <ProjectFilters
          availableTags={projectTags}
          selectedTags={selectedTags}
          countsByTag={countsByTag}
          onToggleTag={toggleTag}
          onClearTags={clearTags}
          totalCount={items.length}
          visibleCount={filteredItems.length}
        />
      ) : null}

      {visibleItems.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleItems.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <EmptyState title={emptyTitle} description={emptyDescription} />
      )}
    </section>
  );
};

export default ProjectCollection;
