// src/components/sections/Contact.jsx (수정본)
import React from "react";
import { Link } from "react-router-dom"; // Link 추가

const Contact = () => {
  return (
    <section className="py-10"> {/* id 제거, 상단 여백 조정 */}
      <div className="flex flex-col md:flex-row justify-between gap-12 border-t border-gray-800 pt-20">
        <div>
          <h2 className="text-4xl font-bold mb-6">Let's work together.</h2>
          <a href="mailto:me@slgjlgjg.com" className="text-xl text-gray-400 hover:text-white transition-colors">
            me@slgjlgjg.com
          </a>
        </div>

        <div className="flex gap-12">
          {/* Socials (외부 링크는 a 태그 유지) */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-gray-500 uppercase text-sm tracking-wider">
              Socials
            </h3>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors">
              LinkedIn
            </a>
          </div>

          {/* Sitemap (내부 링크는 Link 태그로 변경!) */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-gray-500 uppercase text-sm tracking-wider">
              Sitemap
            </h3>
            <Link to="/" className="hover:text-purple-400 transition-colors">
              Home
            </Link>
            <Link to="/projects" className="hover:text-purple-400 transition-colors">
              Projects
            </Link>
            <Link to="/about" className="hover:text-purple-400 transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;