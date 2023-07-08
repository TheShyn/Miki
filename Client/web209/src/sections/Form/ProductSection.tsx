import React from 'react'
import ProductSection from '../Product/ProductSection/ProductSection'
import ProductsTitle from './ProductTitle'

export default function ProductSections() {
    return (
        <div className="">
            {/* Background Respondsived */}
            {/* <Background > */}
                <div className=" w-full max-w-[448px] md:w-[448px] ">
                    {/* Render list product */}
                    <div className="max-h-[300px] overflow-y-scroll pr-[16px]">
                        {/* {products?.map((product) => ( */}
                            <ProductSection />
                            <ProductSection />
                        {/* ))} */}
                    </div>
                    {/* Title total */}
                    <ProductsTitle />
                </div>
            {/* </Background> */}
        </div>
    )
}
