import { RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri";

export const heroContent = {
  status: "Ready for Liftoff",
  role: "Rocket Propulsion Engineer",
  name: "LEE GIJU",
  subTitle: "Rocket Propulsion System Development",
  description:
    "I design liquid and solid propulsion hardware built to be tested, iterated, and proven with real data.",
  ctaMain: "View Projects",
  ctaSecondary: "Contact Me",
};

export const aboutContent = {
  title: "About Me",
  paragraphs: [
    "저는 로켓 추진 시스템을 중심으로, 아이디어를 실제 시험 가능한 하드웨어로 구현하는데 관심이 많은 엔지니어입니다.",
    "고체 추진에서는 다양한 스케일의 모터를 직접 설계·제작·시험해 왔으며, 노즐·케이싱 등 구성 요소를 통합적으로 최적화해 성능과 신뢰성을 끌어올리는 전 주기 개발을 수행합니다. 또한 여러 규모의 고체 모터 개발에 대해 설계 대행 및 기술 조언을 제공해왔으며, 팀이 성공적으로 지상 시험과 비행(발사)까지 완료하도록 지원한 경험이 있습니다.",
    "액체 추진에서는 주로 인젝터, 연소기 등 엔진 통합 시스템을 설계해 왔으며, 핀틀 인젝터를 포함한 각종 통합 인젝터, 그리고 재생 냉각과 삭마 냉각 등을 설계해본 바 있습니다. 현재는 주로 적층 제조를 이용한 소형 Gas-Gas 연소기를 개발, 시험하는 중입니다. 또한 3kN급 LOX/IPA 연소기의 설계 또한 진행 중 입니다.",
    "또한 DED 기반 Metal 3D 프린터를 운용해본 경험으로부터 Additive Manufacturing 기술에 대해 높은 관심과 이해도를 가지고 있습니다. 이를 액체 연소기 설계 등에 반영하여 AM-friendly 형상 설계와 최적화를 지향하고 있습니다.",
  ],
};

export const experienceTimeline = [
  {
    id: 1,
    role: "경기북과학등학교 졸업",
    company: "경기북과학고등학교",
    period: "Feb 2021 — Feb 2024",
    description:
      "항공우주 분야에 관심이 커 경기북과학고등학교에 진학하게 되었습니다. 물리와 공학 분야를 학습하며 로켓 추진에 대한 관심을 키웠습니다. ",
  },
  {
    id: 2,
    role: "아주대학교 학부생",
    company: "아주대학교",
    period: "Mar 2024 — Present",
    description: "아주대학교 국방디지털융합학과 10기 재학 중 입니다.",
  },
  {
    id: 3,
    role: "Propulsion Engineer & Advisor",
    company: "AJOURO",
    period: "Jun 2024 — Present",
    description:
      "아주대학교의 로켓 동아리 AJOURO에서 추진 시스템 개발을 담당하고 있고, 동체 · 발사대 등 로켓 시스템 전반에 대한 설계/시험 조언을 수행하고 있습니다.",
  },
  {
    id: 4,
    role: "Part-Time Cooling Engineer",
    company: "VF Space",
    period: "Feb 2024 — Aug 2024",
    description:
      "VF Space에서 3kN LOX/Kerosene 재생 냉각 연소기 설계를 담당했습니다.",
  },
  {
    id: 5,
    role: "Propulsion Engineer & Additive Manufacturing Engineer",
    company: "VF Space",
    period: "Aug 2024 — Dec 2024",
    description:
      "VF Space에서 3kN LOX/Kerosene 연소기 개발 및 WLAM Metal 3D Printer 운용·시험을 담당했습니다.",
  },
  {
    id: 6,
    role: "Project Manager & Propulsion Engineer",
    company: "VF Space",
    period: "Jan 2025 — Apr 2025",
    description:
      "VF Space에서 사운딩 로켓 프로젝트의 PM을 수행, 액체 연소기 시스템 및 동체 개발을 담당했습니다.",
  },
];

export const contactContent = {
  title: "Contact Me!",
  subtitle: "Let's build something awesome together.",
  phone: "82+ 10-7109-0397",
  email: "giju0508@gmail.com",
  socials: [
    {
      name: "Instagram: Main",
      url: "https://www.instagram.com/2giju",
      icon: RiInstagramFill,
    },
    {
      name: "Instagram: Rocketry",
      url: "https://instagram.com/lgj_rocketry",
      icon: RiInstagramFill,
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/giju-lee-08a721342/",
      icon: RiLinkedinBoxFill,
    },
  ],
};
