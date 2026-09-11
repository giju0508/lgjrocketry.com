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
        className="inline-flex min-h-11 w-fit items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-orange-200"
      >
        ← Back to Projects
      </Link>

      <section className="space-y-6">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-3xl space-y-3">
            <div className="space-y-2">
              <p className="text-sm leading-6 text-slate-400">
                {project.category}
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                {project.title}
              </h1>
            </div>
            {project.summary ? <p className="max-w-2xl text-base leading-7 text-slate-300">{project.summary}</p> : null}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.links.map((link, index) =>
              isInteractiveLink(link.url) ? (
                <a
                  key={`${link.name || "pending"}-${index}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-orange-200 transition hover:border-orange-300/55 hover:bg-white/5"
                >
                  <span>{link.name}</span>
                  <span>↗</span>
                </a>
              ) : (
                <span
                  key={`${link.name || "pending"}-${index}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-400"
                >
                  {link.name}
                </span>
              ),
            )}
          </div>
        </div>

        <dl className="grid gap-5 border-y border-white/10 py-6 sm:grid-cols-[0.6fr_1.5fr_1fr] sm:gap-8">
            <div className="space-y-2">
              <dt className="text-xs font-medium text-slate-400">Year</dt>
              <dd className="text-sm font-medium text-white">{project.year}</dd>
            </div>
            <div className="space-y-2">
              <dt className="text-xs font-medium text-slate-400">My role</dt>
              <dd className="text-sm font-medium leading-6 text-white">{project.role === "PM" ? "Project management" : project.role}</dd>
            </div>
            {project.stage ? <div className="space-y-2">
              <dt className="text-xs font-medium text-slate-400">Project stage</dt>
              <dd className="text-sm font-medium text-orange-200">{project.stage}</dd>
            </div> : null}
        </dl>
        {project.highlight ? <p className="border-l-2 border-orange-400 pl-4 text-sm leading-6 text-slate-200">{project.highlight}</p> : null}
      </section>

      <ProjectGallery
        key={project.id}
        title={project.title}
        images={project.images}
        captions={project.captions}
      />

      <section className="grid gap-6 border-t border-white/10 pt-8 md:grid-cols-[200px_minmax(0,1fr)] md:gap-12">
        <div className="space-y-5">
          <h2 className="text-xl font-semibold text-white">Project overview</h2>
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {project.tags.map((tag) => <span key={tag} className="text-xs leading-5 text-slate-400">#{tag}</span>)}
          </div>
        </div>
        <article className="min-w-0">
            <MarkdownContent content={project.description} />
        </article>
      </section>
    </div>
  );
};

export default ProjectDetail;
