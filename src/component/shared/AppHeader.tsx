import React from "react";
import AboutMe, { AboutMeProps } from "../home/About-me";

export interface AppHeaderProps {}
const AppHeader: React.FC<AppHeaderProps> = () => {
  const aboutMeProps: AboutMeProps = { display: true };

  return (
    <header className="bg-slate-900 py-4 ">
      <nav className=" flex flex-row justify-between text-white max-w-5xl mx-auto  ">
        <div>
          {" "}
          <ul className="flex flex-row space-x-5">
            {aboutMeProps.display && (
              <li>
                <a href="#">Home</a>
              </li>
            )}
            {aboutMeProps.display && (
              <li>
                <a href="#aboutMe">About Me</a>
              </li>
            )}
            {aboutMeProps.display && (
              <li>
                <a href="#aboutMe">Blog</a>
              </li>
            )}
            {aboutMeProps.display && (
              <li>
                <a href="#aboutMe">Contact</a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
