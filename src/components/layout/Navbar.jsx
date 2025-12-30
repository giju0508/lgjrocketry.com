import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // 현재 경로일 때는 주황색(orange-500), 아니면 회색으로!
  // font-bold를 제거해서 굵기를 일정하게 맞췄어!
  const getLinkClass = (path) => {
    const isActive =
      path === "/"
        ? location.pathname === "/"
        : location.pathname === path || location.pathname.startsWith(path + "/");
    return isActive
      ? "text-orange-500 transition-colors"
      : "text-gray-400 hover:text-white transition-colors";
};
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-[600px]">
      {/* 테두리 그라데이션은 유지해서 고급스러움을 살렸어! */}
      <div className="rounded-full p-[1px] bg-gradient-to-r from-orange-500/40 via-red-600/40 to-orange-400/90 shadow-lg">
        <div className="flex items-center justify-between px-6 py-3 rounded-full bg-black/80 backdrop-blur-xl">
          {/* 로고 섹션 */}
          <Link
            to="/"
            className="text-lg font-bold flex items-center gap-2 text-white group"
          >
            <img src="/LGJLogo.png" alt="Logo" className="w-8 h-8" />
            <span className="group-hover:text-orange-500 transition-colors">
              LGJ Rocketry
            </span>
          </Link>

          {/* 메뉴 링크: 굵기는 font-medium으로 통일! */}
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link to="/" className={getLinkClass("/")}>
              Home
            </Link>
            <Link to="/about" className={getLinkClass("/about")}>
              About
            </Link>
            <Link to="/projects" className={getLinkClass("/projects")}>
              Projects
            </Link>
            <Link to="/contact" className={getLinkClass("/contact")}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
