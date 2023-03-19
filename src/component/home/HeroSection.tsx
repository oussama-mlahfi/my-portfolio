import Link from "next/link";
import React from "react";
import MyImage from "../shared/MyImage";
import TypingAnimation from "../shared/TypingAnimation";

export interface HeroSectionProps {}
const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <div className="flex flex-row  justify-between items-center" id="hero">
      <div className="text-black w-1/2 ">
        <span className=" font-tags font-bold text-gray-500 ">{"<body>"}</span>
        <div className="pt-10">
          <span className=" font-tags font-bold text-gray-500">{"<h1>"}</span>
          <div className="flex flex-col items-start text-5xl text-gradient h-36 font-black ">
            <TypingAnimation delay={0} text="Hi," loop={false} />
            <TypingAnimation
              delay={300}
              text="I'm Oussama Mlahfi,"
              loop={false}
            />
            <TypingAnimation
              delay={2000}
              text="A FullStack Developer"
              loop={false}
            />
          </div>
          <span className=" font-tags font-bold text-gray-500">{"</h1>"}</span>
        </div>
        <div className="flex flex-row items-center py-2  text-center">
          <span className=" font-tags font-bold text-gray-500">{"<span>"}</span>
          <span className="text-2xl font-black">
            Web / Mobile Application Developer
          </span>
          <span className=" font-tags font-bold text-gray-500">
            {"</span>"}
          </span>
        </div>
        <div>
          <span className=" font-tags font-bold text-gray-500">{"<p>"}</span>
          <p className="font-thin">
            A passionate Full Stack Software Developer 🚀 having an experience
            of building Web and Mobile applications with TypeScript / Reactjs /
            Nodejs / React Native and some other cool libraries and frameworks.
          </p>
          <span className=" font-tags font-bold text-gray-500">{"</p>"}</span>
        </div>
        <div className="py-5">
          <span className="text-gray-200 px-5 py-2 rounded-lg  bg-blue-700 font-black">
            Contact Me!
          </span>
        </div>
        <span className=" font-tags font-bold text-gray-500">{"</body>"}</span>
      </div>
      <div>
        <MyImage
          src="/Ills/home-hero-ills.svg"
          width={500}
          height={500}
          alt="ills"
        />
      </div>
    </div>
  );
};

export default HeroSection;
