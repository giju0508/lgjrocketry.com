import React from 'react';
import ProjectList from '../components/sections/ProjectList';

const Projects = () => {
  return (
    <div className="animate-fade-in pt-10">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Projects
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
        제가 참여하고 진행해 온 프로젝트들입니다! <br />
        현재 일부 프로젝트는 자료 정리 및 업로드가 진행 중입니다. <br />
        엔진/추진 시스템 관련해 궁금한 점이 있으시면 언제든 편하게 연락 주세요.

        </p>
      </div>

      {/* 업로드한 프로젝트 리스트 컴포넌트 */}
      <ProjectList />
    </div>
  );
};

export default Projects;