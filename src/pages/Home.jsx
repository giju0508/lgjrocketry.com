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
    <div className="space-y-16">
      <Hero />

      <section className="space-y-6">
        <PageHeader
          eyebrow="Projects"
          title="Key Projects"
          description="주요 프로젝트를 먼저 확인해보세요."
          action={
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-full border border-orange-400/30 bg-black/25 px-5 py-3 text-sm font-semibold text-orange-100 transition hover:border-orange-300/55 hover:bg-orange-400/[0.12]"
            >
              View All Projects
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
