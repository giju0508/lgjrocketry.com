import React, { useState, useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projectData";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  // ✅ project가 아직 없을 수도 있으므로 안전하게 이미지 배열 생성
  const projectImages = useMemo(() => {
    if (!project) return [];
    return project.images || (project.image ? [project.image] : []);
  }, [project]);

  // 현재 슬라이드 인덱스 상태 관리
  const [currentIndex, setCurrentIndex] = useState(0);

  // ID가 바뀌면(다른 프로젝트로 이동하면) 슬라이드를 첫 번째로 초기화
  useEffect(() => {
    setCurrentIndex(0);
  }, [id]);

  // ✅ 이미지 프리로드 (브라우저 idle 시간 활용)
  useEffect(() => {
    if (!projectImages.length) return;

    const run = () =>
      projectImages.forEach((src) => {
        const img = new Image();
        img.decoding = "async";
        img.src = src;
      });

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(run);
    } else {
      setTimeout(run, 200);
    }
  }, [id, projectImages.join("|")]);

  // 프로젝트가 없을 경우 예외 처리
  if (!project) {
    return (
      <div className="text-center py-32 animate-fade-in text-white min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">Project not found 😢</h2>
        <Link
          to="/projects"
          className="text-orange-400 hover:text-orange-300 transition-colors underline underline-offset-4"
        >
          Return to Projects
        </Link>
      </div>
    );
  }

  // 현재 보여줄 이미지 경로 (없을 경우를 대비해 빈 문자열 처리)
  const currentImageSrc = projectImages[currentIndex] || "";

  const nextSlide = () => {
    if (projectImages.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevSlide = () => {
    if (projectImages.length <= 1) return;
    setCurrentIndex(
      (prev) => (prev - 1 + projectImages.length) % projectImages.length
    );
  };

  return (
    <div className="animate-fade-in pt-10 pb-20 text-white">
      {/* 1. 상단 네비게이션 */}
      <div className="max-w-6xl mx-auto mb-8 px-4 md:px-0">
        <Link
          to="/projects"
          className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium w-fit"
        >
          ← Back to Projects
        </Link>
      </div>

      {/* 2. 헤더 섹션 (제목 & 링크) */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6 border-b border-gray-800 pb-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight tracking-tight">
            {project.title}
          </h1>
          <p className="text-lg text-gray-400 font-medium">{project.category}</p>
        </div>

        {/* 링크 버튼들 */}
        <div className="w-full md:w-auto flex flex-wrap gap-3 md:justify-end">
          {project.links?.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full border border-gray-700 text-sm font-medium 
                         hover:bg-white hover:text-black hover:border-white transition-all duration-300 
                         flex items-center gap-2 group"
            >
              {link.name}
              <span className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* 3. 메인 콘텐츠 그리드 (설명 & 정보) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        {/* 왼쪽: 설명 및 스택 */}
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Overview</h3>

            {/* ✅ Markdown + GFM(Table) + Tailwind에서 리스트/표가 예쁘게 보이도록 components 오버라이드 */}
            <div className="text-gray-300 leading-relaxed text-lg">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ node, ...props }) => (
                    <h1 className="text-3xl font-bold mt-6 mb-3" {...props} />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3 className="text-xl font-semibold mt-5 mb-2" {...props} />
                  ),
                  p: ({ node, ...props }) => (
                    <p className="my-3" {...props} />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className="list-disc pl-6 space-y-1 my-3" {...props} />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol
                      className="list-decimal pl-6 space-y-1 my-3"
                      {...props}
                    />
                  ),
                  li: ({ node, ...props }) => <li {...props} />,
                  table: ({ node, ...props }) => (
                    <div className="overflow-x-auto my-4">
                      <table
                        className="w-full border border-gray-700 text-sm"
                        {...props}
                      />
                    </div>
                  ),
                  thead: ({ node, ...props }) => (
                    <thead className="bg-gray-900/60" {...props} />
                  ),
                  th: ({ node, ...props }) => (
                    <th
                      className="border border-gray-700 px-3 py-2 text-left font-semibold"
                      {...props}
                    />
                  ),
                  td: ({ node, ...props }) => (
                    <td
                      className="border border-gray-700 px-3 py-2 align-top"
                      {...props}
                    />
                  ),
                  code: ({ inline, node, ...props }) =>
                    inline ? (
                      <code className="px-1 py-0.5 rounded bg-gray-800/60 text-orange-200" {...props} />
                    ) : (
                      <code className="block p-3 rounded bg-gray-800/60 overflow-x-auto" {...props} />
                    ),
                }}
              >
                {project.description}
              </ReactMarkdown>
            </div>
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

        {/* 오른쪽: 메타 정보 카드 */}
        <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 h-fit backdrop-blur-sm">
          <ul className="space-y-6">
            <li>
              <span className="block text-gray-500 text-xs uppercase tracking-wider mb-1">
                Year
              </span>
              <span className="text-xl font-semibold text-white">
                {project.year}
              </span>
            </li>
            <li>
              <span className="block text-gray-500 text-xs uppercase tracking-wider mb-1">
                Role
              </span>
              <span className="text-xl font-semibold text-white">
                {project.role}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* 4. 이미지 슬라이더 (블러 배경 포함) */}
      {projectImages.length > 0 && (
        <div className="relative group w-full rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 shadow-2xl">
          {/* 이미지 컨테이너 (비율 유지) */}
          <div className="aspect-video w-full relative flex items-center justify-center overflow-hidden">
            {/* [배경] 흐린 효과 (Vignette) */}
            <div className="absolute inset-0 -z-0">
              <img
                src={currentImageSrc}
                alt=""
                className="w-full h-full object-cover filter blur-3xl scale-110 brightness-[0.4] opacity-70 transition-all duration-700"
              />
            </div>

            {/* [전경] 메인 이미지 */}
            <img
              src={currentImageSrc}
              alt={`${project.title} preview`}
              className="w-full h-full object-contain relative z-10 transition-all duration-500 drop-shadow-2xl"
            />
          </div>

          {/* 좌우 컨트롤 버튼 (이미지 2장 이상일 때만) */}
          {projectImages.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-orange-600 p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 text-white z-20 border border-white/10"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-orange-600 p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 text-white z-20 border border-white/10"
              >
                →
              </button>

              {/* 페이지네이션 점 */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20 p-2 rounded-full bg-black/20 backdrop-blur-sm">
                {projectImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "w-8 bg-orange-500"
                        : "w-2 bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;