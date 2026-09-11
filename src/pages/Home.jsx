// src/pages/Home.jsx
import { Link } from "react-router-dom";
import PageHeader from "../components/ui/PageHeader";
import { projectsById } from "../content/projects";
import Hero from "../features/home/Hero";
import ProjectCollection from "../features/projects/ProjectCollection";

const keyProjectIds = ["asi", "vulcan_200", "alpm_v2"];

const Home = () => {
  const featuredProjects = keyProjectIds
    .map((projectId) => projectsById[projectId])
    .filter(Boolean);

  return (
    <div className="space-y-10 sm:space-y-16">
      <Hero />

      <section className="space-y-6">
        <PageHeader
          eyebrow="Projects"
          title="Key Projects"
          as="h2"
          description="주요 프로젝트를 먼저 확인해보세요."
          action={
            <Link
              to="/projects"
              className="inline-flex min-h-11 items-center justify-center gap-2 text-sm font-medium text-orange-200 transition hover:text-orange-100"
            >
              View all projects <span aria-hidden="true">↗</span>
            </Link>
          }
        />

        <ProjectCollection
          items={featuredProjects}
          limit={keyProjectIds.length}
          emptyTitle="No featured projects yet"
          emptyDescription=""
        />
      </section>
    </div>
  );
};

export default Home;
