import React from "react";

interface props {
  value: string;
  onChange: Function;
}

export const ProfileInput = ({ value, onChange }: props) => {
  return (
    <input
      type="text"
      className="p-2 w-2/3 my-2 border border-gray-400 bg-gray-100 focus:bg-white outline-none sm:w-full"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      autoComplete="off"
    />
  );
};
