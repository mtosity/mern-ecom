import React from "react";

interface TitleProps {
  title: string;
}
export const FooterTitle = ({ title }: TitleProps) => {
  return (
    <p className=" uppercase text-white text-lg tracking-wider font-bold">
      {title}
    </p>
  );
};
