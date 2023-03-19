import React from "react";

export interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="   px-12 ">{children}</div>;
};

export default Container;
