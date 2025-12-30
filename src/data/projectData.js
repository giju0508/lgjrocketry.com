export const projects = [
  {
    id: "nalda2",
    title: "NALDA - 2",
    category: "600m-Class Sounding Rocket",
    role: "Team Leader & Propulsion Module Developent", // 역할 추가
    year: "2023",
    images: [
      "\\images\\nalda2\\nalda2_main.png",
      "\\images\\nalda2\\nalda2_rocket.jpg",
      "\\images\\nalda2\\nalda2_srm.jpg",
      "\\images\\nalda2\\nalda2_rocket_modeling.png",
      "\\images\\nalda2\\nalda2_rocket_motor_modeling.png",
      "\\images\\nalda2\\nadla2_grain_manufacturing.jpg",
    ],
    description:
      "- My First Rocket Engine Test & Flight\n" +
      "- Sounding Rocket with I Class KNSB Motor\n" +
      "- A thrilling flight test (Don't try this at home)\n",

    // ★ 여기가 핵심! 태그 리스트
    tags: ["Solid Rocket Motor", "KNSB Propellant", "Sounding Rocket"],

    // ★ 여기가 핵심! 버튼(링크) 리스트
    links: [
      {
        name: "[Youtube] Static Fire",
        url: "https://youtu.be/y-Bl1bwOfSU?si=TM1PpCnROWI0t8S_",
      },
      { name: "[Youtube] Test Flight", url: "https://youtu.be/ZTEYskIgb0E" },
    ],
  },
  {
    id: "pallas_mini",
    title: "Pallas Mini",
    category: "Flgith Proven I Class KNSB Motor",
    role: "Propulsion System Development", // 역할 추가
    year: "2024",
    // 실제 이미지 경로가 있다면 넣어줘! 없으면 외부 링크 사용
    images: [
      "\\images\\pallas_mini\\pallas_mini_main.png",
      "\\images\\pallas_mini\\pallas_mini_thrust_curve.png",
      "\\images\\pallas_mini\\pallas_mini_after_static_fire.jpg",
      "\\images\\pallas_mini\\pallas_mini_cross_section2.png",
      "\\images\\pallas_mini\\pallas_mini_cross_section.png",
      "\\images\\pallas_mini\\pallas_mini_view.png",
    ],
    description:
      "- I-Class KNSB motor for AJOURO's Sounding Rocket\n" +
      "- Multi-Segment Design for Netural Thrust Curve\n" +
      "- Maximizing performance by weight-optimized design\n"+
      "(Total 1kg including propellant, about 40% propellant loading fraction)\n"+
      "- Thrust Efficiency > 92% (ISP: 107 sec at SL)",

    // ★ 여기가 핵심! 태그 리스트
    tags: ["Solid Rocket Motor", "KNSB Propellant", "Flight Proven"],

    // ★ 여기가 핵심! 버튼(링크) 리스트
    links: [
      { name: "[Youtube] Static Fire", url: "https://youtu.be/1du52inQEJk" },
      {
        name: "[Instagram] Thrust Curve",
        url: "https://www.instagram.com/p/C9tLrcHyIy7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      { name: "Design File", url: "#" },
    ],
  },
  {
    id: "ajr1",
    title: "AJR - 1",
    category: "400m-Class Sounding Rocket at 2024 NURA",
    role: "Propulsion System Development & Total System Advisor", // 역할 추가
    year: "2024",
    // 실제 이미지 경로가 있다면 넣어줘! 없으면 외부 링크 사용
    images: [
      "\\images\\ajr1\\ajr1_main.jpg",
      "\\images\\ajr1\\ajr1_sub1.png",
      "\\images\\ajr1\\ajr1_sub2.png",
      "\\images\\ajr1\\ajr1_sub3.jpg",
      "\\images\\ajr1\\ajr1_sub4.jpg",
      "\\images\\ajr1\\ajr1_sub5.png",
      "\\images\\ajr1\\ajr1_sub7.jpg",
    ],
    description:
      "- 400m Class Sounding Rocket Developed at AJOURO\n" +
      "- Successfully Launched & Recovered at NURA 2024\n" +
      "- Pixhawk based Avionics System\n"+
      "- Survo motor based Fairing open type Recovery System\n"+
      "- Successfully Recovered after reaching about 250m\n",

    // ★ 여기가 핵심! 태그 리스트
    tags: ["NURA", "AJOURO", "Sounding Rocket"],

    // ★ 여기가 핵심! 버튼(링크) 리스트
    links: [
      { name: "[Youtube] Flight Video", url: "https://youtu.be/f6b4FRlGqX4" },
      { name: "[Shorts] Flight Video", url: "https://youtube.com/shorts/ARVEHhoLQ3k?si=o92ngrxS1qNRs1OR" },
      {
        name: "[Univ News] Award News",
        url: "https://www.ajou.ac.kr/kr/ajou/studentNews.do?mode=view&articleNo=341386&article.offset=0&articleLimit=12",
      },
    ],
  },
  {
    id: "helios03",
    title: "Helios 0.3",
    category: "3kN LOX/Kerosene Combustor with Regen Cooling",
    role: "Developer", // 역할 추가
    year: "2024",
    // 실제 이미지 경로가 있다면 넣어줘! 없으면 외부 링크 사용
    images: [
      "\\images\\helios03\\helios03_main.jpg",
      "\\images\\helios03\\helios03_sub1.jpg",
      "\\images\\helios03\\helios03_sub2.jpg",
      "\\images\\helios03\\helios03_sub3.jpg",
      "\\images\\helios03\\helios03_sub4.jpg",
    ],
    description:
      "- 3kN LOX/Kerosene Combustor\n" +
      "- Additively Manufactured by PBF\n" +
      "- Display model with STS316L and IN718 for Development model\n" +
      "- WLAM-printed extension for Vacuum variant",

    // ★ 여기가 핵심! 태그 리스트
    tags: ["3kN", "Kerolox", "Regen Cooling", "AM"],

    // ★ 여기가 핵심! 버튼(링크) 리스트
    links: [
      { name: "Design File", url: "#" },
    ],
  },
  {
    id: "30n_asi",
    title: "30N Class ASI",
    category: "GOX/GCH4 ASI for Helios 0.3",
    role: "PM",
    year: "2025",
    images: [
      "\\images\\30n_asi\\30n_asi_main.jpg",
      "\\images\\30n_asi\\30n_asi_sub1.jpg",
      "\\images\\30n_asi\\30n_asi_sub2.jpg",
    ],
    description:
      "- 30N GOX/GCH4\n" +
      "- Gas based Augmented Spark Ignitor\n" +
      "- Developed & Tested for 3kN LOX/Kerosene LRE\n"+
      "- One-piece, billet-machined design for reduced lead time and faster iteration.",

    tags: ["ASI", "GOX", "GCH4"],

    links: [
      { name: "Static Test", url: "https://youtu.be/Z7pxDd2Fwcc" }
    ],
  },
  {
    id: "ajr2",
    title: "AJR - 2",
    category: "400m-Class Sounding Rocket at 2025 NURA",
    role: "Propulsion System Development & Total System Advisor", // 역할 추가
    year: "2024",
    // 실제 이미지 경로가 있다면 넣어줘! 없으면 외부 링크 사용
    images: [
      "\\images\\ajr2\\ajr2_main.jpg",
      "\\images\\ajr2\\ajr2_sub1.jpg",
      "\\images\\ajr2\\ajr2_sub2.png",
      "\\images\\ajr2\\ajr2_sub3.jpg",
      "\\images\\ajr2\\ajr2_sub4.jpg",
      "\\images\\ajr2\\ajr2_sub5.png",
    ],
    description:
      "- 400m Class Sounding Rocket Developed at AJOURO\n" +
      "- Weight reduction and improved operability through optimized design.\n" +
      "- Successfully Launched & Recovered at NURA 2025\n" +
      "- Pixhawk based Avionics System\n"+
      "- Survo motor based Fairing open type Recovery System\n"+
      "- Successfully Recovered after reaching about 380m\n",

    // ★ 여기가 핵심! 태그 리스트
    tags: ["NURA", "AJOURO", "Sounding Rocket"],

    // ★ 여기가 핵심! 버튼(링크) 리스트
    links: [
      {
        name: "[Instagram] Flight Video",
        url: "https://www.instagram.com/reel/DNKYI02hKgk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
    ],
  },
  {
    id: "pallas_l2000e",
    title: "Pallas - L2000E",
    category: "2kN LOX/Ethanol Combustor",
    role: "Developer", // 역할 추가
    year: "2025",
    // 실제 이미지 경로가 있다면 넣어줘! 없으면 외부 링크 사용
    images: [
      "\\images\\pallas_l2000e\\pallas_l2000e_main.png",
      "\\images\\pallas_l2000e\\pallas_l2000e_sub1.png",
      "\\images\\pallas_l2000e\\pallas_l2000e_sub2.png",
      "\\images\\pallas_l2000e\\pallas_l2000e_sub3.png",
      "\\images\\pallas_l2000e\\pallas_l2000e_sub4.png",
      "\\images\\pallas_l2000e\\pallas_l2000e_sub5.png",
    ],
    description:
      "- 2kN LOX/Kerosene LRE\n" +
      "- LOX-center Pintle Design (Clean-Sheet Design)\n" +
      "- Graphite Inner for Ablative Cooling\n"+
      "- Chamber Pressure: 15 bar (1.5 MPa)\n"+
      "- ISP: 206 sec at SL, 236 sec at Vac\n",

    // ★ 여기가 핵심! 태그 리스트
    tags: ["Etalox", "Pintle", "Ablative"],

    // ★ 여기가 핵심! 버튼(링크) 리스트
    links: [
      { name: "Design File", url: "#" },
    ],
  },
  {
    id: "vulcan_200",
    title: "Vulcan - 200 Project",
    category: "200N GOX/GCH4 GRE with AM Tech",
    role: "PM",
    year: "2025",
    images: ["\\images\\optic_the_cat.jpg",
      "\\images\\optic_the_second_cat.jpg",
    ],
    description:
      "- 200N GOX/GCH4\n" +
      "- More information & design will be revealed at 2026 Q2",

    tags: ["GOX", "GCH4", "AM"],

    links: [
      { name: "Design File", url: "#" },
    ],
  },
];
