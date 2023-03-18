import React from "react";
import Container from "./Container";

export interface NavBarProps {}
const NavBar: React.FC<NavBarProps> = () => {
  return (
    <header>
      <nav className="">
        <Container>
          <div className=" flex flex-row space-x-6 bg-gray-700 text-white">
            <span>Home</span>
            <span>Jobs</span>
            <span>Blog</span>
            <span>About Me</span>
            <span>Contact</span>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default NavBar;
