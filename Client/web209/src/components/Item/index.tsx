import FormatPrice from '@/utils/FormatPrice'
import Button from '../Button'
import { Link } from 'react-router-dom'

export interface IProduct {
    name: string,
    price: string | number,
    img: string,
    discount?: number,
    slug: string
}


export default function ItemProduct({ discount = 0, name, price, img, slug }: IProduct) {
    return (
        <div className=" text-center font-bold relative ">
            {discount !== 0 && <div className='flex justify-center items-center absolute -inset-1 -skew-y-3 top-[-2%] text-white z-10 rounded-[5px] bg-discount left-[-2%]  max-w-[100px] max-h-[30px]'>
                <span>Giảm {discount}%</span>
            </div>}
            <div className='relative hover:shadow-product 
                    overflow-hidden flex justify-center rounded-[5px] peer-hover:shadow-product
                    
                    '>
                <Link to={`/products/${slug}`}>
                    <img src={"https://miki-jewelry.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoa5p4v4z%2Fimage%2Fupload%2Fv1664474358%2Fhrnt7z87vvzhqho1hxbd.jpg&w=384&q=75"} alt="" className='rounded-[5px] max-h-[325px] hover:scale-[1.2] duration-1000' />
                </Link>
            </div>
            <Link to={`/products/${slug}`}>
                <p className="text-xl mt-3  ">{name.length > 26 ? name.slice(0, 26) + '...' : name}</p>

            </Link>
            <p className="text-price-text mt-[3px] text-xl"><FormatPrice price={price} /></p>
            <Button primary style="w-full mt-3 hover-btn-primary peer" content='Thêm vào giỏ hàng' />
        </div>
    )
}