import React from 'react'
import TotalCart from './TotalCart'
import CartItems from './CartItems'

export default function CartUser() {
    return (
        <div className="lg:grid lg:gap-[138px] lg:grid-cols-2 flex flex-col gap-[30px]">
            <CartItems />
            <TotalCart />
        </div>
    )
}
