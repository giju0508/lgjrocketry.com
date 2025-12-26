// src/components/sections/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="border-t border-gray-800 pt-20">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        <div>
          <h2 className="text-4xl font-bold mb-6">Let's work together.</h2>
          <p className="text-gray-400">me@slgjlgjg.com</p>
        </div>

        <div className="flex gap-12">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-gray-500 uppercase text-sm tracking-wider">
              Socials
            </h3>
            <a href="#" className="hover:text-purple-400 transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Twitter
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-gray-500 uppercase text-sm tracking-wider">
              Sitemap
            </h3>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Projects
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              About
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
