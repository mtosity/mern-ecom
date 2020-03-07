import React from "react";
import classnames from "classnames";

interface props {
  classname?: string;
  placeholder?: string;
  name: string;
  type: string;
  textarea?: boolean;
  value: string;
  onChange: Function;
}

export const AdminInput = ({
  classname,
  placeholder,
  name,
  type,
  textarea,
  value,
  onChange
}: props) => {
  return textarea ? (
    <textarea
      rows={3}
      className={classnames(
        classname,
        "p-2 mb-4 text-admin-input rounded border border-admin-word bg-admin-card text-sm w-1/2 outline-none focus:border-admin-input", 
      )}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  ) : (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={classnames(
        classname,
        "p-2 mb-4 text-admin-input rounded border border-admin-word bg-admin-card text-sm w-1/2 outline-none focus:border-admin-input",
      )}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
