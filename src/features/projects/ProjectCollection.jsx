import { useMemo, useState } from "react";
import EmptyState from "../../components/ui/EmptyState";
import { projectTags } from "../../content/projects";
import { matchesProjectCategory } from "../../lib/projectCategories";
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
  const [selectedCategory, setSelectedCategory] = useState("all");

  const countsByTag = useMemo(
    () =>
      projectTags.reduce((accumulator, tag) => {
        accumulator[tag] = items.filter(
          (project) =>
            matchesProjectCategory(project, selectedCategory) &&
            selectedTags.every((selectedTag) => project.tags.includes(selectedTag)) &&
            project.tags.includes(tag),
        ).length;
        return accumulator;
      }, {}),
    [items, selectedCategory, selectedTags],
  );

  const filteredItems = useMemo(() => {
    if (!enableFilters) {
      return items;
    }

    return items.filter(
      (project) =>
        matchesProjectCategory(project, selectedCategory) &&
        selectedTags.every((tag) => project.tags.includes(tag)),
    );
  }, [selectedTags, selectedCategory, enableFilters, items]);

  const visibleItems = useMemo(() => {
    if (typeof limit === "number") {
      return filteredItems.slice(0, limit);
    }

    return filteredItems;
  }, [filteredItems, limit]);

  const toggleTag = (tag) => {
    setSelectedTags((currentTags) =>
      currentTags.includes(tag)
        ? currentTags.filter((value) => value !== tag)
        : [...currentTags, tag],
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
    setSelectedCategory("all");
  };

  return (
    <section className="space-y-6">
      {enableFilters ? (
        <ProjectFilters
          availableTags={projectTags}
          selectedTags={selectedTags}
          selectedCategory={selectedCategory}
          countsByTag={countsByTag}
          onToggleTag={toggleTag}
          onSelectCategory={setSelectedCategory}
          onClearFilters={clearFilters}
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
