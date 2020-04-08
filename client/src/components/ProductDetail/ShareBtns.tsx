import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


export const ShareBtns = () => {
    return (
        <div className="flex items-center">
            <p className="text-lg">SHARE: </p>
            <FontAwesomeIcon icon={faFacebook} className="ml-2" size="2x" color="blue"/>
            <FontAwesomeIcon icon={faFacebook} className="ml-2" size="2x" color="blue"/>
            <FontAwesomeIcon icon={faFacebook} className="ml-2" size="2x" color="blue"/>
        </div>
    )
}
