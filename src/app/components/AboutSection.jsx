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
        <li>Java</li>
        <li>Kotlin</li>
        <li>Jetpack Compose</li>
        <li>XML</li>
        <li>Spring Boot & Spring MVC</li>
        <li>Spring Security</li>
        <li>RESTful APIs</li>
        <li>Hibernate</li>
        <li>PostgreSQL</li>
        <li>AWS</li>
        <li>Docker</li>
        <li>Kubernetes</li>
        <li>Microservice Architecture</li>
        <li>Apache Kafka</li>
        <li>Testing: JUnit5, Mockito, JaCoCo</li>
        <li>Redis Cache</li>
        <li>Spring AOP</li>
        <li>Git and Github</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.Tech. (Information Technology)</li>
        <p>Guru Tegh Bahadur Institute of Technology, India</p>
        <p>Secured 9.1 CGPA</p>
        <br></br>
        <li>Higher Education</li>
        <p>The Lawrence Public School, India</p>
        <p>Secured 91%</p>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Machine Learning</li>
        <p>The Uplift Project, Girlscript Foundation</p><br></br>
        <li>The Complete Android Development Masterclass</li>
        <p>Udemy</p>
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
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I’m a Full Stack Mobile Developer passionate about building interactive, responsive mobile applications. With expertise in Java, Kotlin, Jetpack Compose, Spring Boot, RESTful APIs, and cloud technologies like AWS, I create seamless user experiences from backend to front-end. Let’s connect and build something amazing together!
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
