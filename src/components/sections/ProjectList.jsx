// src/components/sections/ProjectList.jsx
import React from "react";
import { Link } from "react-router-dom";

const ProjectList = () => {
  return (
    <section id="projects">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
        <span className="text-purple-400">✦</span> MY WORK
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 프로젝트 카드 1 */}
        <Link to="/project/iphone-15-pro" className="group block">
          <div className="bg-gray-900 aspect-video rounded-2xl mb-4 overflow-hidden relative">
            {/* 호버 시 이미지가 살짝 커지는 효과 */}
            <div className="w-full h-full bg-gray-800 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-gray-600">
              Thumbnail Image
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold group-hover:text-purple-400 transition-colors">
                iPhone 15 Pro
              </h3>
              <p className="text-gray-500 mt-1">Development • Web</p>
            </div>
            <span className="text-gray-600 border border-gray-800 px-3 py-1 rounded-full text-sm">
              2024
            </span>
          </div>
        </Link>

        {/* 프로젝트 카드 2 (임시) */}
        <Link to="/project/aora" className="group block">
          <div className="bg-gray-900 aspect-video rounded-2xl mb-4 overflow-hidden relative">
            <div className="w-full h-full bg-gray-800 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-gray-600">
              Thumbnail Image
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold group-hover:text-purple-400 transition-colors">
                Aora
              </h3>
              <p className="text-gray-500 mt-1">Mobile App • UI/UX</p>
            </div>
            <span className="text-gray-600 border border-gray-800 px-3 py-1 rounded-full text-sm">
              2024
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ProjectList;
