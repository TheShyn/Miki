import { IProducts } from '@/interface/IProducts'
import React from 'react'
import ItemProduct from '../Item'

type Props = {
    data : IProducts[]
}

export default function ProductItems({data}: Props) {
  return (
    <div className="grid mx-auto md:grid-cols-2 mt-[50px] lg:grid-cols-4 lg:gap-[30px]  gap-[30px]">
        {data.map((item,i)=>{
            return (
                <ItemProduct discount={item.discount} name={item.name} price={item.price} img={item.img} />
            )
        })}
    </div>
  )
}