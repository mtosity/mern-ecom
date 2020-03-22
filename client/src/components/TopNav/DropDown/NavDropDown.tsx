import React, { ReactChild } from "react";
interface props {
  children: ReactChild;
}

export const NavDropDown = ({ children }: props) => {
  return (
    <div className="relative z-10">
      <div
        className="absolute top-0 left-0 opacity-0 border-t border-red-400 bg-gray-100 px-12 py-4 shadow-lg rounded-sm 
        transform duration-500 transition-all translate-y-8 ease-in-out pointer-events-none
        group-hover:transform group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto"
        style={{ top: "18px" }}
      >
        {children}
      </div>
    </div>
  );
};
