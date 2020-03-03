import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
//
interface SideCateLinkProps {
  title: string;
}
export const SideCateLink = ({title}: SideCateLinkProps) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href=""
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex-1 flex items-center px-2 hover:bg-gray-400 flex justify-between hover:text-blue-700"
    >
      {title}
      <FontAwesomeIcon icon={faArrowRight} className={hovered ? "" : "hidden"} />
    </a>
  );
}