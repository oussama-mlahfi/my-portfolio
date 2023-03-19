"use client";
import useIntersectionObserver from "@/lib/use-observer";
import React, { useEffect, useRef, useState } from "react";
import MyImage from "../shared/MyImage";

export interface AboutMeProps {}
const AboutMe: React.FC<AboutMeProps> = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  console.log(`Render Section `, { isVisible });
  return (
    <div
      className="flex flex-row justify-between items-center overflow-hidden"
      ref={ref}
    >
      <div className={` ${isVisible ? "animate-slide-in-left" : ""}`}>
        {" "}
        <MyImage
          src="/imgs/profile-placeholder.jpg"
          width={300}
          height={500}
          alt="profile picture"
          className="rounded-full"
        />
      </div>
      <div className={` ${isVisible ? "animate-slide-in-right" : ""}`}>
        <h2 className="text-2xl font-bold">What I DO</h2>
        <p className="font-thin py-5">
          CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
        </p>
        <div className="flex flex-row items-center space-x-4">
          {expertise.map((item, i) => (
            <Expertise src={item.icon} key={i} title={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

export interface ExpertiseProps {
  src: string;
  title: string;
}
const Expertise: React.FC<ExpertiseProps> = ({ src, title }) => {
  return (
    <div className=" flex flex-col items-center">
      <div className="h-10 flex items-center justify-center">
        <MyImage src={src} width={30} height={30} alt="logo" />
      </div>
      <h3> {title} </h3>
    </div>
  );
};

const expertise = [
  { name: "firebase", icon: "/logos/firebase.svg" },
  { name: "aws", icon: "/logos/aws.svg" },
  { name: "html5", icon: "/logos/html5.svg" },
  { name: "css", icon: "/logos/css.svg" },
  { name: "javascript", icon: "/logos/javascript.svg" },
  { name: "nodejs", icon: "/logos/nodejs.svg" },
  { name: "npm", icon: "/logos/npm.svg" },
  { name: "react", icon: "/logos/react.svg" },
  { name: "tailwindcss", icon: "/logos/tailwindcss.svg" },
  { name: "typescript", icon: "/logos/typescript.svg" },
];
