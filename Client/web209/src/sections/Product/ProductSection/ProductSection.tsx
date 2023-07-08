import FormatPrice from '@/utils/FormatPrice'
import React from 'react'

export default function ProductSection({ product }: any) {
    return (
        <div className="flex mb-7">
            {/* <div className={`${windowWidth <= 480 ? "w-[40px] h-[40px]" : "w-[56px] h-[56px]"}`}><Image fixed="true" width={windowWidth <= 480 ? 40 : 56} height={windowWidth <= 480 ? 40 : 56} src={product.image} /></div> */}
            {/* Name */}
            <div className='flex'>
                <img src="https://miki-jewelry.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoa5p4v4z%2Fimage%2Fupload%2Fv1664474358%2Fhrnt7z87vvzhqho1hxbd.jpg&w=384&q=75" alt="" className='max-w-[80px] rounded' />

                <h1 className="mx-4 max-w-[249px]  font-semibold text-base leading-6">{'Name'}</h1>

            </div>
            <div className="flex flex-col products-end w-[110px]">
                {/* Price */}
                <h1 className="text-base leading-7 mb-[8px] text-right  font-bold"><FormatPrice price={123} /></h1>
                <div className="flex justify-end">
                    {/* Quantity */}
                    <h1 className="text-[14px] italic">Số lượng: 123</h1>
                </div>
            </div>
        </div>
    )
}
