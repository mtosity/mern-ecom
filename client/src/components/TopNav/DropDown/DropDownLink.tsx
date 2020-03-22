import React from "react";

interface props {
  title: string;
}

export const DropDownLink = ({ title }: props) => {
  return (
    <a href="#" className="text-gray-700 py-4 inline-block hover:text-red-600">
      {title}
    </a>
  );
};
