// src/components/layout/Layout.jsx
import React from 'react';
import Navbar from './Navbar'; // Navbar 불러오기

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-12 lg:px-24">
      
      {/* 여기에 Navbar 추가! */}
      <Navbar />

      {/* Navbar가 떠 있으니까 본문이 가려지지 않게 위쪽 여백(pt-32)을 좀 넉넉히 줌 */}
      <div className="max-w-5xl mx-auto pt-32 pb-12">
        {children}
      </div>
      
      <footer className="mt-24 pb-12 text-gray-500 text-sm text-center border-t border-gray-900 pt-8">
        © 2026 LGJ Rocketry. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Layout;