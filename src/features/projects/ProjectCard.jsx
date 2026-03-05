import { Link } from "react-router-dom";
import { resolveAssetPath } from "../../lib/assets";

const ProjectCard = ({ project }) => {
  const previewImage = resolveAssetPath(project.images[0]);

  return (
    <Link
      to={`/projects/${project.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-orange-400/28 bg-black/25 transition duration-300 hover:-translate-y-1 hover:border-orange-300/48 hover:bg-black/30"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-orange-400/16 bg-black/30">
        <img
          src={previewImage}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute right-3 top-3 rounded-full border border-orange-400/26 bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white">
          {project.year}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 px-4 py-4 sm:px-5">
        <div className="space-y-1.5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
            {project.category}
          </p>
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-white transition group-hover:text-orange-200 sm:text-xl">
              {project.title}
            </h3>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-2 gap-y-1">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium leading-5 text-orange-200/90"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-orange-400/16 pt-3 text-xs font-semibold text-slate-300 transition group-hover:text-white sm:text-sm">
          <span>View Details</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
