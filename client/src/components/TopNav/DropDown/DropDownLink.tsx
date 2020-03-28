import React from "react";
import { Link } from "react-router-dom";

interface props {
  title: string;
}

export const DropDownLink = ({ title }: props) => {
  return (
    <Link to={`/category/${title}`} className="w-full text-gray-700 py-4 px-2 block hover:text-red-600">
      {title}
    </Link>
  );
};
