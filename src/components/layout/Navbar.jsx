// src/components/layout/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // 상단에 고정(fixed), 중앙 정렬, z-index를 높여서 맨 위에 뜨게 함
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-[600px]">
      <div
        className="flex items-center justify-between px-6 py-3 rounded-full 
                      bg-black/50 backdrop-blur-md border border-white/10 shadow-lg transition-all hover:border-white/20"
      >
        {/* 왼쪽: 로고 */}
        <Link
          to="/"
          className="text-lg font-bold flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
        >
          <span className="text-xl">🚀</span>
          <span>LGJ Rocketry</span>
        </Link>

        {/* 오른쪽: 메뉴 링크들 */}
        <div className="flex items-center gap-6 text-sm font-medium text-gray-300">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <a
            href="#experience"
            className="hover:text-white transition-colors hidden md:block"
          >
            Exp
          </a>
          <a
            href="#projects"
            className="hover:text-white transition-colors hidden md:block"
          >
            Works
          </a>
          <Link to="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
