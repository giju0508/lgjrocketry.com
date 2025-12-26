import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projectData';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="text-center py-20 animate-fade-in">
        <h2 className="text-2xl font-bold mb-4">Project not found 😢</h2>
        <Link to="/projects" className="text-purple-400 hover:underline">Return to Projects</Link>
      </div>
    );
  }

  return (
    <div className="animate-fade-in pt-10 pb-20">
      {/* 상단 네비게이션 */}
      <div className="max-w-5xl mx-auto mb-8 px-4 md:px-0">
        <Link to="/projects" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
          ← Back to Projects
        </Link>
      </div>

      {/* 헤더 섹션 */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6 border-b border-gray-800 pb-10">
        
        {/* 제목 및 카테고리 영역 (공간을 좀 더 차지하도록 flex-1) */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">{project.title}</h1>
          <p className="text-lg text-gray-400">{project.category}</p>
        </div>

        {/* 버튼 영역 (수정됨!) */}
        <div className="w-full md:w-auto flex flex-wrap gap-3 md:justify-end">
          {project.links && project.links.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-gray-700 text-sm font-medium 
                         hover:bg-white hover:text-black hover:border-white transition-all duration-300
                         flex items-center gap-1 whitespace-nowrap"
            >
              {link.name}
              {/* 화살표 아이콘을 살짝 작게 */}
              <span className="text-xs">↗</span>
            </a>
          ))}
        </div>
      </div>

      {/* 메인 콘텐츠 그리드 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
        
        {/* 왼쪽: 설명 및 태그 */}
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
              {project.tags && project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-gray-800/50 text-purple-300 px-3 py-1.5 rounded-md text-sm font-medium border border-gray-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 오른쪽: 메타 정보 */}
        <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 h-fit">
          <ul className="space-y-6">
            <li>
              <span className="block text-gray-500 text-xs uppercase tracking-wider mb-1">Year</span>
              <span className="text-lg font-semibold">{project.year}</span>
            </li>
            <li>
              <span className="block text-gray-500 text-xs uppercase tracking-wider mb-1">Role</span>
              <span className="text-lg font-semibold">{project.role}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 이미지 섹션 */}
      <div className="w-full rounded-2xl overflow-hidden border border-gray-800 bg-gray-900">
         <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto object-cover"
         />
      </div>
    </div>
  );
};

export default ProjectDetail;