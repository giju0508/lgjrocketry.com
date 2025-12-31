import React, { useState } from "react";
import { contactData } from "../data/contactData";
import { RiMailSendLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target; // id가 name/email/message
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMsg("");
    
    // 간단 검증
    if (!form.name || !form.email || !form.message) {
      setStatusMsg("Please fill in all fields.");
      return;
    }

    try {
      setIsSending(true);

      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // 당신이 말한 template parameter: title, name, time, message, email
      const templateParams = {
        title: "New Contact Message (Portfolio)", // 원하는 값으로 변경 가능
        name: form.name,
        time: new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" }),
        message: form.message,
        email: form.email,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      });

      setStatusMsg("Message sent successfully.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatusMsg("Failed to send message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="animate-fade-in pt-10 pb-20">
      {/* 1. 상단 타이틀 */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {contactData.title}
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          {contactData.subtitle}
        </p>
      </div>

      {/* 2. 메인 컨텐츠 (좌: 정보 / 우: 폼) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* --- 왼쪽: 연락처 정보 & 소셜 타일 --- */}
        <div className="space-y-12">
          {/* 이메일 섹션 */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
              <RiMailSendLine className="text-purple-400" /> Contact Info
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              {contactData.description}
            </p>
            <p className="text-gray-400 leading-relaxed text-lg mb-8">
              Email: {contactData.email}
            </p>
          </div>

          {/* 소셜 아이콘 타일 섹션 */}
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">
              Social Profiles
            </h3>

            {/* 그리드 레이아웃 (타일 배치) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {contactData.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm 
                             hover:bg-gray-900/80 hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  {/* 아이콘: 호버 시 보라색으로 변함 */}
                  <social.icon className="text-4xl mb-3 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />

                  {/* 텍스트: 호버 시 흰색으로 변함 */}
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- 오른쪽: 폼 (EmailJS 전송) --- */}
        <div className="bg-gray-900/50 p-8 md:p-10 rounded-3xl border border-gray-800 h-fit sticky top-24">
          <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="Steve"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="lgj@lgjrkt.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors resize-none"
                placeholder="Hello! I'd like to discuss a project..."
              />
            </div>

            {statusMsg && (
              <p className="text-sm text-gray-300">{statusMsg}</p>
            )}

            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
