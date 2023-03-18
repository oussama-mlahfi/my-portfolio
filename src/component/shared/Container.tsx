import React from "react";

export interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="px-12 py-6">{children}</div>;
};

export default Container;
