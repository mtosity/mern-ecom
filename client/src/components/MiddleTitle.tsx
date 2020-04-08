import React from "react";

interface props {
  title: string
}

export const MiddleTitle = ({title}: props) => {
  return (
    <div className="w-full flex justify-center items-center flex-col mt-8 text-center">
      <h1 className="jo-font font-extrabold text-5xl">{title}</h1>
      <div className="h-20 border-t-2 border-red-600 w-20"></div>
    </div>
  );
};
