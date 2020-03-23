import React, { useState } from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


export const ProductColors = () => {
  const colors = ["red", "blue", "green", "black"];
  const [selectedColor, setColor] = useState("red");
  return (
    <div className="flex items-center">
      {colors.map(c => {
        return (
          <button
            className={classnames(
              "w-10 h-10 flex justify-center font-bold items-center  ml-4 jo-font focus:outline-none",
              selectedColor === c ? "bg-gray-900 text-white" : "bg-gray-300"
            )}
            key={c}
            style={{backgroundColor: c}}
            onClick={() => setColor(c)}
          >
              {
                  selectedColor === c ? 
                  <FontAwesomeIcon icon={faCheck}/>
                  :
                  <p></p>
              }
          </button>
        );
      })}
    </div>
  );
};
