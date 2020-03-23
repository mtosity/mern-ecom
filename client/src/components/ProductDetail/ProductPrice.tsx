import React from 'react'

interface props {
    price: number;
}

export const ProductPrice = ({price}: props) => {
    return (
    <p className="text-gray-700 font-black text-lg">{`$ ${price}`}</p>
    )
}
