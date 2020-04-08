import React from 'react'
import { OrderSummary } from '../components/CheckOut/OrderSummary'
import { CheckoutShipping } from '../components/CheckOut/CheckoutShipping'
import { OrderBtn } from '../components/CheckOut/OrderBtn'

export const CheckOut = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16 bg-gray-100">
            <OrderSummary/>
            <CheckoutShipping/>
            <OrderBtn/>
        </div>
    )
}
