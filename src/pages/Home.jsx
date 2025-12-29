// src/pages/Home.jsx
import React from "react";
import Hero from "../components/sections/Hero";

const Home = () => {
  return (
    <div className="animate-fade-in -mt-24 space-y-20">
      <Hero />
      {/* 필요하다면 여기에 "Featured Projects" 같은 섹션을 추가해도 좋아 */}
    </div>
  );
};

export default Home;
