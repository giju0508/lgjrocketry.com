import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // 현재 경로 확인용

  // 현재 페이지면 흰색, 아니면 회색으로 보이게 하는 함수
  const getLinkClass = (path) => 
    location.pathname === path ? "text-white" : "hover:text-white transition-colors";

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-[600px]">
      <div className="flex items-center justify-between px-6 py-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 shadow-lg transition-all hover:border-white/20">
        
        {/* 로고 */}
        <Link to="/" className="text-lg font-bold flex items-center gap-2 text-white hover:text-purple-400 transition-colors">
          <span className="text-xl">🚀</span>
          <span>LGJ Rocketry</span>
        </Link>

        {/* 메뉴 링크 (멀티 페이지 방식) */}
        <div className="flex items-center gap-6 text-sm font-medium text-gray-300">
          <Link to="/" className={getLinkClass("/")}>Home</Link>
          <Link to="/about" className={getLinkClass("/about")}>About</Link>
          <Link to="/projects" className={getLinkClass("/projects")}>Projects</Link>
          <Link to="/contact" className={getLinkClass("/contact")}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;