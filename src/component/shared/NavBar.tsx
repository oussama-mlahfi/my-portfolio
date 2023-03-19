import React from "react";
import Container from "./Container";

export interface NavBarProps {}
const NavBar: React.FC<NavBarProps> = () => {
  return (
    <header>
      <nav className="">
        <div className=" px-10 py-3 flex flex-row space-x-6 bg-slate-900 text-white">
          <span>Twitter</span>
          <span>Github</span>
          <span>Ask Me</span>
          <span>Contact</span>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
