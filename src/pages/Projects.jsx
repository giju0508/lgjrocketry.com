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
          Check out some of the projects I've been working on.
        </p>
      </div>

      {/* 업로드한 프로젝트 리스트 컴포넌트 */}
      <ProjectList />
    </div>
  );
};

export default Projects;