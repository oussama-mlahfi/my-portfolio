import React from "react";
import Container from "./Container";

export interface NavBarProps {}
const NavBar: React.FC<NavBarProps> = () => {
  return (
    <header>
      <nav className="">
        <div className=" flex flex-row space-x-6 bg-gray-700 text-white">
          <span>Twitter</span>
          <span>Github</span>
          <span>Ask Me</span>
          <span></span>
          <span>Contact</span>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
