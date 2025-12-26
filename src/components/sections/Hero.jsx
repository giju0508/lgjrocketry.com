// src/components/sections/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section id="hero">
      <div className="flex flex-col gap-4">
        <h2 className="text-gray-400 text-lg font-medium">Software Engineer</h2>
        <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight">
          LEE GIJU <br />
          <span className="text-gray-600">PORTFOLIO</span>
        </h1>
        <p className="mt-6 text-xl text-gray-400 max-w-2xl">
          Creating next level digital products. <br />
          Always providing user-centric experiences.
        </p>
      </div>
    </section>
  );
};

export default Hero;