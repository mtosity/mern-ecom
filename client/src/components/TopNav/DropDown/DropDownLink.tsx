import React from "react";

interface props {
  title: string;
}

export const DropDownLink = ({ title }: props) => {
  return (
    <a href="#" className="w-full text-gray-700 py-4 px-2 block hover:text-red-600">
      {title}
    </a>
  );
};
