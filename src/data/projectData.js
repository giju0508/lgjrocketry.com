export const projects = [
  {
    id: "iphone-15-pro",
    title: "iPhone 15 Pro Clone",
    category: "Web Development",
    role: "Frontend Developer", // 역할 추가
    year: "2024",
    // 실제 이미지 경로가 있다면 넣어줘! 없으면 외부 링크 사용
    image: "https://via.placeholder.com/1200x600/1a1a1a/ffffff?text=iPhone+15+Pro", 
    description: "Recreating the Apple iPhone 15 Pro website using React and GSAP for smooth animations. Focused on performance optimization and 3D model rendering.",
    
    // ★ 여기가 핵심! 태그 리스트
    tags: ["React", "GSAP", "Three.js", "TailwindCSS"],
    
    // ★ 여기가 핵심! 버튼(링크) 리스트
    links: [
      { name: "Live Demo", url: "https://iphone-15-clone.vercel.app" },
      { name: "GitHub Repo", url: "https://github.com/yourusername/iphone-15" },
      { name: "Design File", url: "https://figma.com/..." } 
    ]
  },
  {
    id: "aora",
    title: "Aora Mobile App",
    category: "Mobile App • UI/UX",
    role: "UI Designer & Developer",
    year: "2023",
    image: "https://via.placeholder.com/1200x600/1a1a1a/ffffff?text=Aora+App",
    description: "A modern mobile application designed for seamless user experience. Built with React Native.",
    
    tags: ["React Native", "Expo", "NativeWind"],
    
    links: [
      { name: "App Store", url: "#" },
      { name: "Play Store", url: "#" }
    ]
  }
];