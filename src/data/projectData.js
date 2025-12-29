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
        name: "Static Fire",
        url: "https://youtu.be/y-Bl1bwOfSU?si=TM1PpCnROWI0t8S_",
      },
      { name: "Test Flight", url: "https://youtu.be/ZTEYskIgb0E" },
    ],
  },
  {
    id: "pallas_mini",
    title: "Pallas Mini",
    category: "I Class KNSB Motor",
    role: "Propulsion System Development", // 역할 추가
    year: "2024",
    // 실제 이미지 경로가 있다면 넣어줘! 없으면 외부 링크 사용
    images: [
      "\\images\\pallas_mini\\pallas_mini_main.png",
      "\\images\\pallas_mini\\pallas_mini_thrust_curve.png",
      "\\images\\pallas_mini\\pallas_mini_after_static_fire.jpg",
      "\\images\\pallas_mini\\pallas_mini_view.png",
      "\\images\\pallas_mini\\pallas_mini_view.png",
    ],
    description:
      "- I-Class KNSB motor for AJOURO's Sounding Rocket\n" +
      "- Multi-Segment Design for Netural Thrust Curve\n" +
      "- Maximizing performance through weight-optimized design",

    // ★ 여기가 핵심! 태그 리스트
    tags: ["Solid Rocket Motor", "KNSB Propellant"],

    // ★ 여기가 핵심! 버튼(링크) 리스트
    links: [
      { name: "[Youtube] Static Fire", url: "https://youtu.be/1du52inQEJk" },
      {
        name: "[Instagram] Thrust Curve",
        url: "https://www.instagram.com/p/C9tLrcHyIy7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      { name: "Design File", url: "https://figma.com/..." },
    ],
  },
  {
    id: "30n_asi",
    title: "30N Class ASI",
    category: "GOX/GCH4 Augmented Spark Ignitor for LRE",
    role: "PM",
    year: "2025",
    images: [
      "\\images\\30n_asi\\30n_asi_main.jpg",
      "\\images\\30n_asi\\30n_asi_sub1.jpg",
      "\\images\\30n_asi\\30n_asi_sub2.jpg",
    ],
    description:
      "- 30N GOX/GCH4\n" +
      "- Augmented Spark Ignitor\n" +
      "- Developed & Tested for 3kN LOX/Kerosene LRE\n",

    tags: ["ASI", "GOX", "GCH4"],

    links: [
      { name: "Static Test", url: "https://youtu.be/Z7pxDd2Fwcc" },
      { name: "Play Store", url: "#" },
    ],
  },
  {
    id: "vulcan_200",
    title: "Vulcan - 200 Project",
    category: "200N GOX/GCH4 LRE with Additive Manufacturing",
    role: "PM",
    year: "2025",
    images: ["\\images\\optic_the_cat.jpg"],
    description:
      "- 200N GOX/GCH4\n" +
      "- Imping Injector (Planned upgrade to a swirl-type injector)\n" +
      "- Additive Manufactured with IN718 printing (Planned upgrade to a monolithic-design)\n",

    tags: ["ASI", "GOX", "GCH4"],

    links: [
      { name: "Static Test", url: "https://youtu.be/Z7pxDd2Fwcc" },
      { name: "Play Store", url: "#" },
    ],
  },
];
