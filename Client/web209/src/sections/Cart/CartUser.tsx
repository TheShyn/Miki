import React from 'react'
import TotalCart from './TotalCart'
import CartItems from './CartItems'
import { useAppSelector } from '@/app/hooks'

export default function CartUser() {
    const cart = useAppSelector((state:any)=>state.cartUser)

    
    return (
        <div className="lg:grid lg:gap-[138px] lg:grid-cols-2 flex flex-col gap-[30px]">
            <CartItems cart={cart.carts}/>
            <TotalCart cart={cart.carts}/>
        </div>
    )
}
