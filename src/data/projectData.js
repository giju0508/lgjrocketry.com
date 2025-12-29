export const projects = [
  {
    id: "SRM",
    title: "NALDA - 2",
    category: "600m-Class Sounding Rocket",
    role: "Team Leader & Propulsion Module Developent", // 역할 추가
    year: "2023",
    // 실제 이미지 경로가 있다면 넣어줘! 없으면 외부 링크 사용
    image: "https://via.placeholder.com/1200x600/1a1a1a/ffffff?text=iPhone+15+Pro", 
    description: "- My First Rocket Engine Test & Flight\n"+"- Sounding Rocket with I Class KNSB Motor\n"+"- A thrilling flight test\n",
    
    // ★ 여기가 핵심! 태그 리스트
    tags: ["Solid Rocket Motor", "KNSB Propellant", "Sounding Rocket"],
    
    // ★ 여기가 핵심! 버튼(링크) 리스트
    links: [
      { name: "Static Fire", url: "https://youtu.be/y-Bl1bwOfSU?si=TM1PpCnROWI0t8S_" },
      { name: "Test Flight", url: "https://youtu.be/ZTEYskIgb0E" },
    ]
  },
  {
    id: "SRM",
    title: "Pallas Mini",
    category: "I Class KNSB Motor",
    role: "Propulsion System Development", // 역할 추가
    year: "2024",
    // 실제 이미지 경로가 있다면 넣어줘! 없으면 외부 링크 사용
    image: "https://via.placeholder.com/1200x600/1a1a1a/ffffff?text=iPhone+15+Pro", 
    description: "- I-Class KNSB motor for AJOURO's Sounding Rocket\n"+"- Multi-Segment Design for Netural Thrust Curve\n"+"- Maximizing performance through weight-optimized design",
    
    // ★ 여기가 핵심! 태그 리스트
    tags: ["Solid Rocket Motor", "KNSB Propellant"],
    
    // ★ 여기가 핵심! 버튼(링크) 리스트
    links: [
      { name: "[Youtube] Static Fire", url: "https://youtu.be/1du52inQEJk" },
      { name: "[Instagram] Thrust Curve", url: "https://www.instagram.com/p/C9tLrcHyIy7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
      { name: "Design File", url: "https://figma.com/..." } 
    ]
  },
  {
    id: "ASI",
    title: "30N Class ASI",
    category: "GOX/GCH4 Augmented Spark Ignitor for LRE",
    role: "PM",
    year: "2025",
    image: "https://via.placeholder.com/1200x600/1a1a1a/ffffff?text=Aora+App",
    description: "- 30N GOX/GCH4\n"+"- Augmented Spark Ignitor\n"+"- Developed & Tested for 3kN LOX/Kerosene LRE\n",
    
    tags: ["ASI", "GOX", "GCH4"],
    
    links: [
      { name: "Static Test", url: "https://youtu.be/Z7pxDd2Fwcc" },
      { name: "Play Store", url: "#" }
    ]
  },
  {
    id: "LRE",
    title: "Vulcan - 200 Project",
    category: "200N GOX/GCH4 LRE with Additive Manufacturing",
    role: "PM",
    year: "2025",
    image: "https://via.placeholder.com/1200x600/1a1a1a/ffffff?text=Aora+App",
    description: "- 200N GOX/GCH4\n"+"- Imping Injector (Planned upgrade to a swirl-type injector)\n"+"- Additive Manufactured with IN718 printing (Planned upgrade to a monolithic-design)\n",
    
    tags: ["ASI", "GOX", "GCH4"],
    
    links: [
      { name: "Static Test", url: "https://youtu.be/Z7pxDd2Fwcc" },
      { name: "Play Store", url: "#" }
    ]
  }
];