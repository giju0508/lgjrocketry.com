// src/data/contactData.js
// 1. 사용할 아이콘들을 import 해줘 (Remix Icon 스타일)
import { RiGithubFill, RiLinkedinBoxFill, RiTwitterXFill, RiMailSendFill } from "react-icons/ri";

export const contactData = {
  title: "Get in Touch",
  subtitle: "Let's build something awesome together.",
  description: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
  email: "me@slgjlgjg.com",
  
  // 2. socials 배열에 'icon' 컴포넌트를 추가했어!
  socials: [
    { 
      name: "GitHub", 
      url: "https://github.com/yourid", 
      icon: RiGithubFill // 아이콘 컴포넌트 자체를 저장
    },
    { 
      name: "LinkedIn", 
      url: "https://linkedin.com/in/yourid", 
      icon: RiLinkedinBoxFill 
    },
    { 
      name: "X (Twitter)", 
      url: "https://twitter.com/yourid", 
      icon: RiTwitterXFill 
    },
    // 필요하다면 이메일도 타일로 추가 가능!
    // { 
    //   name: "Email", 
    //   url: "mailto:me@slgjlgjg.com", 
    //   icon: RiMailSendFill 
    // },
  ]
};