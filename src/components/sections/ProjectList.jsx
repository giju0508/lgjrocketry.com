import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projectData";
import { getImagePath } from "../../utils/imageHelper.js";

const ProjectList = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
        <span className="text-orange-500">✦</span> MY WORK
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link
            to={`/projects/${project.id}`}
            key={project.id}
            className="group block"
          >
            <div className="bg-gray-900 aspect-video rounded-2xl mb-4 overflow-hidden relative border border-white/5 group-hover:border-orange-500/30 transition-all">
              {/* ⭐ 이미지 배열의 첫 번째 요소([0])를 썸네일로 사용! */}
              <img
                src={getImagePath(project.images?.[0] || project.image)}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* 사진이 여러 장일 때 알려주는 뱃지 (선택 사항!) */}
              {project.images?.length > 1 && (
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md text-[10px] text-gray-300 border border-white/10">
                  +{project.images.length - 1} photos
                </div>
              )}
            </div>

            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 mt-1">{project.category}</p>
              </div>
              <span className="text-gray-600 border border-gray-800 px-3 py-1 rounded-full text-sm">
                {project.year}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
