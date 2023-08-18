import { useAppDispatch, useAppSelector } from '@/app/hooks'
import CartItems from './CartItems'
import TotalCart from './TotalCart'

export default function CartUser() {
   const cart = useAppSelector((state)=> state.userCart)
    console.log(cart.carts);
    
    return (
        <div className="lg:grid lg:gap-[138px] lg:grid-cols-2 flex flex-col gap-[30px]">
            <CartItems cart={cart.carts}/>
            <TotalCart cart={cart.carts}/>
        </div>
    )
}
