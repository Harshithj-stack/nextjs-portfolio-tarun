"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
      
    <li>Leadership</li>
    <li>Communication</li>
    <li>Negotiation</li>
    <li>Relationship Building</li>
    <li>Strategic Planning</li>
    <li>Problem-Solving</li>
    <li>Time Management</li>
    <li>Team Management</li>
    <li>Customer Service</li>
    <li>Market Research</li>

      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>School of Business</li>
        <li>Commerce College, Jaipur</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Certified Professional Sales Person </li>
        <li>Certified Sales Leadership Professional </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
<<<<<<< HEAD
        <Image src="/images/png.jpg" alt="A description of the image" width={500} height={500} />
=======
        <Image src="/images/png.jpg" alt = "des" width={500} height={500} />
>>>>>>> 420e326b22c063c9b712c705722cbcdf33857fbd
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          As a seasoned Sales Manager with 4 years of experience, I possess a unique blend of expertise in the corrugation and pharmaceutical industries. My adaptability and quick learning abilities enable me to provide astute guidance and advisory services.

Notably, my professional portfolio boasts high-profile projects, including a pioneering collaboration with FirstCry in the corrugation industry. Within the pharmaceutical sector, I have successfully managed projects with esteemed institutions such as SMS Hospital.I am eager to leverage my skills and expertise to drive business growth and foster strategic partnerships with new clients.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
