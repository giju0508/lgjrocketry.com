// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 경로가 바뀔 때마다 스크롤을 맨 위로!
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // 화면엔 아무것도 안 그려도 됨
}