import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projectData"; // 데이터 불러오기

const ProjectList = () => {
  return (
    <section className="py-20"> {/* id 삭제, 상하 여백 추가 */}
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
        <span className="text-purple-400">✦</span> MY WORK
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link to={`/project/${project.id}`} key={project.id} className="group block">
            <div className="bg-gray-900 aspect-video rounded-2xl mb-4 overflow-hidden relative">
              {/* 이미지 부분 (실제 이미지가 없을 땐 텍스트 대체) */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold group-hover:text-purple-400 transition-colors">
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