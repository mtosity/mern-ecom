import React from "react";
interface props {
  children: React.ReactNode;
}

export const AdminContent = ({ children }: props) => {
  return (
    <div
      className=" bg-transparent absolute"
      style={{ top: "-120px", left: "280px", bottom: "0px", right: "40px" }}
    >
      {children}
    </div>
  );
};
