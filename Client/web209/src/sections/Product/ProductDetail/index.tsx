import { useAppDispatch, useAppSelector } from '@/app/hooks'
import Button from '@/components/Button'
import { addToCart } from '@/instance/CartUser'
import { IProducts } from '@/interface/IProducts'
import FormatPrice from '@/utils/FormatPrice'
import { useEffect, useState } from 'react'
type Props = {
    product: IProducts
}
export default function ProductDetail({ product }: any) {
    const [size, setSize] = useState(1)
    const [amount, setAmount] = useState(0);
    const [errorQuantity, setErrorQuantity] = useState('');
    const dispatch = useAppDispatch()

    const user = useAppSelector((state: any) => state.auth)
    const cartUser = useAppSelector((state: any) => state.cartUser)
    const handleSize = (index: number) => {
        setSize(index)
    }
    const handleSubAmount = () => {
        amount > 0 && setAmount((prev) => prev - 1);

    };
    const handleAddAmount = () => {
        if (amount >= product.storage[size - 1].quantity) {
            return;
        }
        setAmount((prev) => prev + 1);
    }

    const handleAddCart = () => {
        if (amount <= 0) {
            return setErrorQuantity('Vui lòng chọn size')
        }
        setErrorQuantity('')
        const data = {
            name: product.name,
            price: product.storage[size - 1].price,
            size: product.storage[size - 1].size,
            quantity: amount,
            discount: product.discount,
            image: product.images[0],
            product: product._id

        }
        dispatch(addToCart({id:user.data._id,data}))
        console.log(data);

    }
    useEffect(() => {
        setAmount(0);
        setSize(1)
    }, [product])
    return (
        <>
            <section className="text-gray-700 bg-bgr body-font">
                <div className="container py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className='w-full lg:w-1/2 flex flex-col items-center'  >
                            <img alt="ecommerce" className="w-full object-cover object-center rounded-[10px] border border-gray-200" src="https://miki-jewelry.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoa5p4v4z%2Fimage%2Fupload%2Fv1664474358%2Fhrnt7z87vvzhqho1hxbd.jpg&w=384&q=75" />
                            <div className="mt-3 overflow-x-scroll" >
                                <ul className='flex gap-4'>
                                    <li>
                                        <div className="mb-[12px] shadow-md rounded-8 bg-white">
                                            <img className='rounded-[10px] ' src='https://miki-jewelry.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoa5p4v4z%2Fimage%2Fupload%2Fv1664474358%2Fhrnt7z87vvzhqho1hxbd.jpg&w=384&q=75' />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-[12px] shadow-md rounded-8 bg-white">
                                            <img className='rounded-[10px]' src='https://miki-jewelry.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoa5p4v4z%2Fimage%2Fupload%2Fv1664474358%2Fhrnt7z87vvzhqho1hxbd.jpg&w=384&q=75' />
                                        </div>
                                    </li>

                                    <li>
                                        <div className="mb-[12px] shadow-md rounded-8 bg-white">
                                            <img className='rounded-[10px]' src='https://miki-jewelry.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoa5p4v4z%2Fimage%2Fupload%2Fv1664474358%2Fhrnt7z87vvzhqho1hxbd.jpg&w=384&q=75' />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-[12px] shadow-md rounded-8 bg-white">
                                            <img className='rounded-[10px]' src='https://miki-jewelry.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoa5p4v4z%2Fimage%2Fupload%2Fv1664474358%2Fhrnt7z87vvzhqho1hxbd.jpg&w=384&q=75' />
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{product?.categoryId?.name}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product?.name}</h1>
                            <div className="flex mb-4">
                                <div className='flex'>
                                    <span className="flex items-center">
                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <span className="text-gray-600 ml-3">4 Reviews</span>
                                    </span>
                                    <span className="flex ml-3 pl-3 py-1 border-l-2 border-gray-200">
                                        Đã bán 3
                                    </span>

                                </div>
                                <p className="ml-[96px] inline-block font-bold">
                                    {product.storage[size - 1]?.quantity === 0 ? (
                                        <span className="text-red-500">Hết hàng</span>
                                    ) : product.storage[size - 1]?.quantity <= 10 ? (
                                        <span className="text-red-500">Sắp hết hàng</span>
                                    ) : (
                                        <span className="text-[#58C27D]">Còn hàng</span>
                                    )}
                                </p>
                            </div>
                            <div className='mb-5'>
                                {product?.discount > 0 &&
                                    <div className='flex items-center'>
                                        <span className="text-Neutral/2 text-2xl line-through">
                                            <FormatPrice price={product?.storage?.[0].price} />
                                        </span>
                                        <div className="inline-block ml-[18px] mr-4 w-[2px] h-[25px] border-2 border-[#A18A68] bg-Neutral/2 "></div>
                                        <span className="text-white bg-[#A18A68] rounded-[4px] py-[4px] px-[7px] ">{`${product?.discount} %`}</span>

                                    </div>}
                                <p className="text-price-text text-5xl font-bold mt-4">
                                    <FormatPrice price={product?.storage?.[size - 1]?.price} discount={product?.discount} />
                                </p>
                            </div>
                            <div className="mb-5">
                                <div className="flex mb-4 gap-3 items-center">
                                    <span className="text-lg ">Kích thước:</span>
                                    <div className="flex flex-wrap gap-3">
                                        {product?.storage && product?.storage.map((item: any, index: number) =>

                                            <span
                                                className={
                                                    size == ++index ?
                                                        'inline-block w-[42px] cursor-pointer text-center bg-black text-white py-2 rounded-8 border mb-2'
                                                        : 'inline-block w-[42px] cursor-pointer text-center bg-white text-black py-2 rounded-8 border mb-2'
                                                }
                                                onClick={() => handleSize(index)}
                                            >
                                                {item.size.toUpperCase()}
                                            </span>

                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='mb-5'>
                                <div className=' flex gap-[30px] items-center flex-wrap'>
                                    <div className="flex gap-5">
                                        <span className="text-lg">Số lượng:</span>
                                        <div className=" flex items-center">
                                            <button onClick={handleSubAmount} className="active:bg-black active:rounded-full" >
                                                -
                                            </button>
                                            <p className="text-[20px] font-bold leading-7 w-7 text-center mx-4">{amount}</p>
                                            <button onClick={handleAddAmount} className="active:bg-black active:rounded-full" >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <span>còn 100+ sản phẩm</span>
                                </div>
                                {errorQuantity.length ? <span className='text-[14px] text-red-500'>{errorQuantity}</span> : ''}

                            </div>
                            <div className="mt-5">
                                <div className="flex gap-5 flex-wrap">
                                    <Button primary className="hover-btn-primary mr-[48px] shadow-md" content='Mua ngay' />

                                    <button className=' border-solid  shadow-md  
                                    duration-300 text-white py-2 px-[46px] bg-btn border-[1px] border-btn hover:bg-white hover:text-btn
                                    rounded-8 font-bold
                                    ' onClick={handleAddCart}>
                                        Thêm vào giỏ hàng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
