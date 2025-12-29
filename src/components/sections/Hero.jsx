import React from "react";
import { Link } from "react-router-dom";
import { heroData } from "../../data/heroData";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative pt-20 pb-10 md:pt-32 md:pb-20 overflow-visible"
    >
      {/* 배경 Glow 효과 (유지) */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-red-700/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="flex flex-col gap-8 max-w-5xl">
        {/* 상태 배지 */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">
            {heroData.status}
          </span>
        </div>

        {/* 메인 타이포그래피 */}
        <div className="space-y-1">
          <h2 className="text-gray-400 text-lg md:text-xl font-medium tracking-wider uppercase mb-2">
            {heroData.role}
          </h2>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold leading-[0.9] tracking-tighter ">
            <span className="text-white block -ml-2">{heroData.name}</span>

            <span className="block text-4xl md:text-4xl font-black mt-2 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500">
              {heroData.subTitle}
            </span>
          </h1>
        </div>

        {/* 설명글: 시작점이 위와 딱 맞도록 불필요한 속성 제거 */}
        <p className="text-lg md:text-m text-gray-400 max-w-3xl leading-relaxed mt-4">
          {heroData.description}
        </p>

        {/* CTA 버튼 */}
        <div className="flex flex-wrap gap-4 mt-6">
          <Link
            to="/projects"
            className="px-8 py-4 bg-white text-black font-bold rounded-full 
                       hover:bg-orange-50 transition-all transform hover:-translate-y-1 
                       shadow-[0_0_0_0_rgba(249,115,22,0.7)] hover:shadow-[0_0_20px_5px_rgba(249,115,22,0.4)]"
          >
            {heroData.ctaMain} 🚀
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 border border-gray-700 text-gray-300 font-bold rounded-full 
                       hover:border-orange-500 hover:text-orange-500 transition-all hover:bg-orange-500/10"
          >
            {heroData.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
