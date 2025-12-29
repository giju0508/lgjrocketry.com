import React from "react";
import { Link } from "react-router-dom";
import { heroData } from "../../data/heroData";
import { getImagePath } from "../../utils/imageHelper.js";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-10 md:pt-32 md:pb-20 overflow-hidden"
    >
      {/* 🌌 메인 배경 이미지 레이어 */}
      <div className="absolute inset-0 p-1 overflow-hidden">
        {/* 이미지가 너무 밝으면 글자가 안 보이니 opacity로 농도를 조절해줘요! */}
        <img
          src={getImagePath("/images/wallpaper.jpg")} // 배경으로 쓸 이미지 경로!
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />

        {/* 🌓 사이드 및 상하단 그라데이션 오버레이 (검은색으로 녹아드는 효과) */}
        {/* 1. 좌우 그라데이션: 사이드를 검게 만들어줘요 */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80" />

        {/* 2. 상하 그라데이션: 내비게이션 바와 아래 섹션이 자연스럽게 이어지게 해요 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent via-70% to-black" />
      </div>

      {/* ✨ 기존의 Glow 효과 (배경 이미지와 섞여서 더 신비로워져요!) */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen" />

      <div className="relative z-10 flex flex-col gap-8 max-w-5xl px-6 md:px-0">
        {/* 상태 배지 */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">
            {heroData.status}{" "}
          </span>
          <img src="/LGJLogo.png" alt="Rocket Icon" className="-ml-1 w-5 h-5" />
        </div>

        {/* 메인 타이포그래피 */}
        <div className="space-y-1">
          <h2 className="text-gray-400 text-lg md:text-xl font-medium tracking-wider uppercase mb-2">
            {heroData.role}
          </h2>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold leading-[0.9] tracking-tighter">
            <span className="text-white block">{heroData.name}</span>
            <span className="block text-4xl md:text-4xl font-black mt-2 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500">
              {heroData.subTitle}
            </span>
          </h1>
        </div>

        {/* 설명글 */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mt-4 drop-shadow-md">
          {heroData.description}
        </p>

        {/* CTA 버튼 */}
        <div className="flex flex-wrap gap-4 mt-6">
          <Link
            to="/projects"
            className="px-8 py-4 bg-white text-black font-bold rounded-full 
                       hover:bg-orange-50 transition-all transform hover:-translate-y-1 
                       shadow-lg hover:shadow-orange-500/20"
          >
            {heroData.ctaMain}
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 border border-white/20 text-white font-bold rounded-full 
                       backdrop-blur-sm hover:bg-white/10 transition-all"
          >
            {heroData.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
