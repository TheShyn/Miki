import React from 'react'
import Button from '../Button'
import { IProducts } from '@/interface/IProducts'


export default function ItemProduct({discount = 0, name, price,img }: IProducts) {
    return (
        <div className=" text-center font-bold relative ">
            {discount !== 0 && <div className='flex justify-center items-center block absolute -inset-1 -skew-y-3 top-[-2%] text-white z-10 rounded-[5px] bg-discount left-[-2%]  max-w-[100px] max-h-[30px]'>
                <span>Giảm {discount}%</span>
            </div>}
            <div className='relative hover:shadow-product 
                    overflow-hidden flex justify-center rounded-[5px] peer-hover:shadow-product
                    
                    '>
                <img src={img} alt="" className='rounded-[5px] max-h-[325px] hover:scale-[1.2] duration-1000' />
            </div>
            <p className="text-[20px] mt-6  ">{name}</p>
            <p className="text-price-text mt-[6px]">{price}đ</p>
            <Button primary style="w-full mt-6 hover-btn-primary peer   " content='Thêm vào giỏ hàng' />
        </div>
    )
}