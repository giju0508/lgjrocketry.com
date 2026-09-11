import { Link } from "react-router-dom";
import ProgressiveImage from "../../components/ui/ProgressiveImage";

const ProjectCard = ({ project }) => {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white/[0.025] ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.045] hover:ring-orange-300/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-black/30">
        <ProgressiveImage
          src={project.images[0]}
          alt={project.title}
          className="h-full w-full transition duration-500 group-hover:scale-105"
          imageClassName="object-cover"
          sizes="(min-width: 1280px) 326px, (min-width: 1080px) 498px, (min-width: 768px) calc((100vw - 84px) / 2), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
          maxWidth={1600}
        />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute right-3 top-3 rounded-full bg-black/75 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
          {project.year}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div className="space-y-3">
          {project.stage ? <p className="text-xs font-medium text-orange-200">{project.stage}</p> : null}
          <h3 className="text-xl font-semibold leading-snug tracking-tight text-white transition group-hover:text-orange-200">
            {project.title}
          </h3>
          <p className="text-sm leading-6 text-slate-300">
            {project.summary || project.category}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-2 gap-y-1">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs leading-5 text-slate-400"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4 text-sm font-medium text-slate-200 transition group-hover:text-orange-200">
          <span>Explore project</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
