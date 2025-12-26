import React from 'react';
import Experience from '../components/sections/Experience';

const About = () => {
  return (
    <div className="animate-fade-in pt-10">
      {/* 페이지 타이틀 */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          About Me
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
          I'm a software engineer based in South Korea.<br />
          I focus on building scalable, user-friendly applications that solve real-world problems.
        </p>
      </div>

      {/* 업로드한 경력(Experience) 컴포넌트 배치 */}
      <Experience />
    </div>
  );
};

export default About;