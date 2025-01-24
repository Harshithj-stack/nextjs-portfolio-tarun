import React from "react";

const Footer = () => {
  return (
    <footer className="footer border-t border-[#33353F] text-white bg-[#18191E]">
    <div className="container p-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
      {/* Left Section */}
      <span className="text-2xl font-bold text-yellow-400">TW</span>
  
      {/* Center Section - Contact Message */}
      <p className="text-lg text-primary-500 font-semibold my-4 md:my-0">
        Need your <span className="text-yellow-400">Portfolio Website</span>? 
        Contact Now 👉 <a href="tel:+918529862215" className="underline hover:text-yellow-500">
          (+91-8529862215)
        </a>
      </p>
  
      {/* Right Section */}
      <p className="text-sm text-slate-500">&copy; 2024 All rights reserved.</p>
    </div>
  </footer>
  
  );
};

export default Footer;
