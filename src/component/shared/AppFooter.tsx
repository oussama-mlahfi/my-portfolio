import Link from "next/link";
import React from "react";
import Container from "./Container";

export interface AppFooterProps {}
const AppFooter: React.FC<AppFooterProps> = () => {
  return (
    <footer className="py-20 md:py-30 bg-gray-50 dark:bg-black/20 mt-24">
      <Container>
        <div></div>
      </Container>
    </footer>
  );
};

export default AppFooter;
