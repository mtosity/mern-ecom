import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function CartIcon() {
    return (
        <a className="bg-blue-400 ml-4 p-3" href="#">
          <FontAwesomeIcon size="lg" icon={faShoppingCart} color="white" />
        </a>
    )
}
