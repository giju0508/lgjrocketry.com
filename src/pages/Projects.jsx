import PageHeader from "../components/ui/PageHeader";
import { projects } from "../content/projects";
import ProjectCollection from "../features/projects/ProjectCollection";

const Projects = () => {
  return (
    <div className="space-y-8">
      <PageHeader eyebrow="Projects" title="Project Archive" />

      <ProjectCollection items={projects} enableFilters />
    </div>
  );
};

export default Projects;
