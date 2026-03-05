import { Link, useParams } from "react-router-dom";
import EmptyState from "../components/ui/EmptyState";
import MarkdownContent from "../components/ui/MarkdownContent";
import { projectsById } from "../content/projects";
import ProjectGallery from "../features/projects/ProjectGallery";

const isInteractiveLink = (url) => Boolean(url && url !== "#");

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsById[id];

  if (!project) {
    return (
      <EmptyState
        title="Project not found"
        description="The requested project could not be found in the archive."
        action={
          <Link
            to="/projects"
            className="inline-flex items-center justify-center rounded-full border border-orange-400/30 bg-black/25 px-5 py-3 text-sm font-semibold text-orange-100 transition hover:border-orange-300/55 hover:bg-orange-400/[0.12]"
          >
            Return to Projects
          </Link>
        }
      />
    );
  }

  return (
    <div className="space-y-8">
      <Link
        to="/projects"
        className="inline-flex w-fit items-center gap-2 rounded-full border border-orange-400/30 bg-black/25 px-4 py-2 text-sm font-semibold text-orange-100 transition hover:border-orange-300/55 hover:bg-orange-400/[0.12] hover:text-white"
      >
        ← Back to Projects
      </Link>

      <section className="space-y-5 rounded-[2rem] border border-orange-400/30 bg-black/25 px-6 py-6 backdrop-blur-xl sm:px-8 sm:py-8">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-3xl space-y-3">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                {project.category}
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {project.title}
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.links.map((link) =>
              isInteractiveLink(link.url) ? (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-orange-400/24 bg-black/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-orange-300/55 hover:bg-orange-400/[0.12]"
                >
                  <span>{link.name}</span>
                  <span>↗</span>
                </a>
              ) : (
                <span
                  key={link.name}
                  className="inline-flex items-center gap-2 rounded-full border border-orange-400/18 bg-black/20 px-4 py-2 text-sm font-semibold text-slate-500"
                >
                  {link.name}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="rounded-3xl border border-orange-400/24 bg-black/20 px-4 py-4 sm:px-5">
          <div className="flex flex-wrap items-center gap-3 text-sm sm:gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/18 bg-black/25 px-3 py-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">
                Year
              </span>
              <span className="text-sm font-semibold text-white">{project.year}</span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/18 bg-black/25 px-3 py-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">
                Role
              </span>
              <span className="text-sm font-semibold text-slate-200">
                {project.role}
              </span>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm font-medium leading-6 text-orange-100"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ProjectGallery
        key={project.id}
        title={project.title}
        images={project.images}
        captions={project.captions}
      />

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
        <article className="rounded-[2rem] border border-orange-400/30 bg-black/25 px-6 py-6 backdrop-blur-xl sm:px-8 sm:py-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Overview
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white">
                Project Summary
              </h2>
            </div>
            <MarkdownContent content={project.description} />
          </div>
        </article>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-orange-400/30 bg-black/25 p-5 backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Category
            </p>
            <p className="mt-3 text-base leading-7 text-slate-300">
              {project.category}
            </p>
          </div>

          <div className="rounded-3xl border border-orange-400/30 bg-black/25 p-5 backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Gallery Size
            </p>
            <p className="mt-3 text-3xl font-semibold text-white">
              {project.images.length}
            </p>
            <p className="mt-1 text-sm text-slate-400">Images attached to this project</p>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default ProjectDetail;
