import React from "react";
import Container from "./Container";

export interface AppHeaderProps {}
const AppHeader: React.FC<AppHeaderProps> = () => {
  return (
    <header>
      <nav className="">
        <Container>
          <div>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab itaque
            vel, iste provident perferendis magnam a veritatis! Incidunt dolore
            ipsum earum odit recusandae voluptatem laudantium sequi, enim, vero
            nulla harum?
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default AppHeader;
