import React from "react";
import classnames from "classnames";

interface props {
  classname?: string;
  placeholder: string;
  name: string;
  type: string;
  textarea?: boolean;
}

export const AdminInput = ({
  classname,
  placeholder,
  name,
  type,
  textarea
}: props) => {
  return textarea ? (
    <textarea
      rows={3}
      className={classnames(
        "p-2 mb-4 text-admin-input rounded border border-admin-word bg-admin-card text-sm w-1/2 outline-none focus:border-admin-input",
        classname
      )}
      name={name}
      placeholder={placeholder}
    />
  ) : (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={classnames(
        "p-2 mb-4 text-admin-input rounded border border-admin-word bg-admin-card text-sm w-1/2 outline-none focus:border-admin-input",
        classname
      )}
    />
  );
};
