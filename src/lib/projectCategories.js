export const projectCategories = [
  { id: "all", label: "All projects" },
  { id: "solid", label: "Solid propulsion" },
  { id: "liquid", label: "Liquid propulsion" },
  { id: "flight", label: "Flight vehicles" },
];

export const getProjectCategory = (project) => {
  if (project.tags.includes("Sounding Rocket")) return "flight";
  if (project.tags.includes("SRM")) return "solid";
  if (project.tags.some((tag) => tag === "LOX" || tag === "GOX")) return "liquid";
  return "other";
};

export const matchesProjectCategory = (project, category) =>
  category === "all" || getProjectCategory(project) === category;
