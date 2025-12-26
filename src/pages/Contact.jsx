import React from 'react';
import ContactSection from '../components/sections/Contact';

const Contact = () => {
  return (
    <div className="animate-fade-in pt-10 min-h-[50vh] flex flex-col justify-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Get in Touch</h1>
      <ContactSection />
    </div>
  );
};

export default Contact;