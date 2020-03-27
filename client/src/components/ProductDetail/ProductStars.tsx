import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface props {
  stars: number;
  onlyStars?: boolean;
}

export const ProductStars = ({ stars, onlyStars }: props) => {
  const [startIcons, setStartIcons] = useState<Array<IconDefinition>>([]);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    let tempStarIcons = [];
    let tempStarts = stars;
    for (let i = 0; i < 5; i++) {
      if (tempStarts - i >= 1) {
        tempStarIcons.push(faStar);
      } else if (tempStarts - i >= 0.5) {
        tempStarIcons.push(faStarHalfAlt);
      } else {
        tempStarIcons.push(faStarEmpty);
      }
    }
    setStartIcons(tempStarIcons);
    setMsg(stars.toString());
  }, []);
  return (
    <div className="flex items-center">
      {startIcons.map((s, i) => {
        return (
          <FontAwesomeIcon icon={s} key={i} color="red" className="ml-2" />
        );
      })}
      {onlyStars ? (
        <p></p>
      ) : (
        <p className="ml-2 text-gray-800 font-bold">{`(${msg} stars)`}</p>
      )}
    </div>
  );
};
