import React from 'react';
import Hero from '../components/sections/Hero';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="animate-fade-in space-y-20">
      {/* 1. 히어로 섹션 (업로드한 디자인 그대로) */}
      <Hero />

      {/* 2. 홈 화면용 추가 CTA (선택 사항) */}
      {/* 바로 프로젝트를 보러 가도록 유도하는 깔끔한 버튼 */}
      <div className="flex gap-6">
        <Link 
          to="/projects" 
          className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
        >
          View Projects
        </Link>
        <Link 
          to="/contact" 
          className="px-8 py-3 border border-gray-700 text-gray-300 font-bold rounded-full hover:border-white hover:text-white transition-colors"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Home;