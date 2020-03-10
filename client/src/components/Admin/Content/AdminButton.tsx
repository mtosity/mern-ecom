import React from "react";
import classnames from "classnames";

interface props {
  title: string;
  onClick: Function;
  classname?: string;
}

export const AdminButton = ({ title, onClick, classname }: props) => {
  return (
    <button
      className={classnames(
        "text-admin-title rounded focus:outline-none py-1 active:bg-blue-400 px-4 bg-admin-card adtive:bg-admin-topnav hover:bg-admin-card border-admin-word border hover:border-admin-input",
        classname
      )}
      onClick={e => onClick(e)}
    >
      {title}
    </button>
  );
};
