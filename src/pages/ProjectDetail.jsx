import React, { useState } from "react"; // useState 추가!
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projectData";
import { getImagePath } from "../utils/imageHelper.js";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  // 현재 슬라이드 인덱스 상태 관리
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) {
    return (
      <div className="text-center py-20 animate-fade-in text-white">
        <h2 className="text-2xl font-bold mb-4">Project not found 😢</h2>
        <Link to="/projects" className="text-orange-400 hover:underline">
          Return to Projects
        </Link>
      </div>
    );
  }

  // 이미지 배열 가져오기 (단일 이미지일 경우를 대비한 방어 코드)
  const projectImages = project.images || [project.image];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + projectImages.length) % projectImages.length
    );
  };

  return (
    <div className="animate-fade-in pt-10 pb-20 text-white">
      {/* 상단 네비게이션 (기존과 동일) */}
      <div className="max-w-5xl mx-auto mb-8 px-4 md:px-0">
        <Link
          to="/projects"
          className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
        >
          ← Back to Projects
        </Link>
      </div>

      {/* 헤더 섹션 (기존과 동일) */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6 border-b border-gray-800 pb-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
            {project.title}
          </h1>
          <p className="text-lg text-gray-400">{project.category}</p>
        </div>
        <div className="w-full md:w-auto flex flex-wrap gap-3 md:justify-end">
          {project.links?.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-gray-700 text-sm font-medium hover:bg-white hover:text-black transition-all flex items-center gap-1"
            >
              {link.name} <span className="text-xs">↗</span>
            </a>
          ))}
        </div>
      </div>

      {/* 메인 콘텐츠 그리드 (기존과 동일) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Overview</h3>
            <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
              {project.description}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-400">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-800/50 text-orange-300 px-3 py-1.5 rounded-md text-sm font-medium border border-gray-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 h-fit">
          <ul className="space-y-6">
            <li>
              <span className="block text-gray-500 text-xs uppercase mb-1">
                Year
              </span>
              <span className="text-lg font-semibold">{project.year}</span>
            </li>
            <li>
              <span className="block text-gray-500 text-xs uppercase mb-1">
                Role
              </span>
              <span className="text-lg font-semibold">{project.role}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ⭐ 이미지 슬라이더 섹션 ⭐ */}
      <div className="relative group w-full rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 shadow-2xl">
        <div className="aspect-video w-full">
          <img
            src={getImagePath(projectImages[currentIndex])}
            alt={`${project.title} - ${currentIndex + 1}`}
            className="w-full h-full object-contain transition-all duration-500" // 로켓 사진은 잘리면 안 되니까 object-contain 추천!
          />
        </div>

        {/* 좌우 버튼 - 이미지가 2장 이상일 때만 표시 */}
        {projectImages.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-orange-500/80 p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-orange-500/80 p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
            >
              →
            </button>

            {/* 현재 페이지 표시 인디케이터 */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {projectImages.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 w-8 rounded-full transition-all ${
                    idx === currentIndex ? "bg-orange-500" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
