"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="relative flex flex-col items-center text-center p-8">
  {/* Background Glow Effect */}
  <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-96 w-96 blur-2xl absolute top-2/3 -left-6 transform -translate-x-1/2 -translate-y-1/2 opacity-50"></div>

  <div className="z-10">
    <h5 className="text-3xl font-extrabold text-yellow-400 my-4">✨ Let’s Connect ✨</h5>
    <p className="text-lg text-[#E0E6EB] mb-6 max-w-lg leading-relaxed">

      I &#39; currently open to new opportunities! Whether you have a project idea or just want to say hi, feel free to reach out—I &#39; do my best to respond quickly.
=======
      I &apos;currently open to new opportunities! Whether you have a project idea or just want to say hi, feel free to reach out—I &apos; ll do my best to respond quickly.

    </p>

    {/* Social Links */}
    {/* <div className="socials flex flex-row gap-5 mt-4">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <img src="/icons/github.svg" alt="GitHub Icon" className="h-10 w-10 transition-transform transform hover:scale-110" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="/icons/linkedin.svg" alt="LinkedIn Icon" className="h-10 w-10 transition-transform transform hover:scale-110" />
      </a>
    </div> */}
  </div>
</div>

      <div className="text-center">
  <h2 className="text-4xl font-bold mb-6 text-yellow-400">📢 Reach Out to Me Now</h2>
  <p className="mb-4 flex items-center justify-center text-2xl text-white">
    <span className="mr-4 text-3xl">📧</span> 
    <a href="mailto:tarunwd362@gmail.com" className="text-primary-500 hover:underline font-semibold">
    tarunwd362@gmail.com
    </a>
  </p>
  <p className="flex items-center justify-center text-2xl text-white">
    <span className="mr-4 text-3xl">📞</span>
    <a href="tel:+917297826421" className="text-primary-500 hover:underline font-semibold">
      +91-7297826421
    </a>
  </p>
</div>

    </section>
  );
};

export default EmailSection;
