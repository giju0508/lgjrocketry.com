// src/data/contactData.js
// 1. 사용할 아이콘들을 import 해줘 (Remix Icon 스타일)
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
  RiInstagramFill,
} from "react-icons/ri";

export const contactData = {
  title: "Contact Me!",
  subtitle: "Let's build something awesome together.",
  description: "Phone: 82+ 10-7109-0397",
  email: "giju0508@gmail.com",

  // 2. socials 배열에 'icon' 컴포넌트를 추가했어!
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
      icon: RiLinkedinBoxFill, // 아이콘 컴포넌트 자체를 저장
    },
    // 필요하다면 이메일도 타일로 추가 가능!
    // {
    //   name: "Email",
    //   url: "mailto:me@slgjlgjg.com",
    //   icon: RiMailSendFill
    // },
  ],
};
