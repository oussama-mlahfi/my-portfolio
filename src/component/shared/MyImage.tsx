"use client";

import Image, { ImageProps } from "next/image";
import React from "react";

export interface MyImageProps extends ImageProps {}
const MyImage: React.FC<MyImageProps> = ({ children, ...rest }) => {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image {...rest}>{children}</Image>
  );
};

export default MyImage;
