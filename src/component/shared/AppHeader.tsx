import React from "react";
import Container from "./Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/component/ui/accordion";

export interface AppHeaderProps {}
const AppHeader: React.FC<AppHeaderProps> = () => {
  return (
    <header className="bg-slate-900 py-4 ">
      <nav className=" flex flex-row justify-between text-white max-w-5xl mx-auto  ">
        <div>
          <span>Home</span>
        </div>
        <div className=" flex flex-row space-x-5">
          <span>Jobs</span>
          <span>About Me</span>
          <span>Blog</span>
          <span>Contact</span>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
