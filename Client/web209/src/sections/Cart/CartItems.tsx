import FormatPrice from '@/utils/FormatPrice'
import {AiOutlinePlus,AiOutlineMinus,AiOutlineClose} from 'react-icons/ai'
export default function CartItems() {
    return (
        <div className="flex flex-col">
            <h1 className="text-[24px] font-bold">Giỏ hàng</h1>
            <div className="flex flex-col overflow-y-scroll max-h-[850px] px-4"
            // "flex flex-col max-h-[850px]"}
            >

                <div className="flex gap-[20px]
                 items-center justify-between pb-[46px] 
                    border-b-[1px] pt-[46px] border-b-solid border-b-[#D8D8D8]">
                    <div className="w-[136px] shadow-md rounded-8 overflow-hidden">
                        <img src={'https://miki-jewelry.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoa5p4v4z%2Fimage%2Fupload%2Fv1664474358%2Fhrnt7z87vvzhqho1hxbd.jpg&w=384&q=75'} className="w-[136px]" alt="" />
                    </div>
                    <div className="flex-1 ">
                        <div>
                            <div className='mb-8 flex justify-between items-start'>
                                <h3 className="text-[17px] md:text-[20px] font-bold">{'Name'}</h3>
                                <button className="active:bg-black active:text-white active:rounded-full">
                                    <AiOutlineClose/>
                                </button>
                            </div>
                            <p className='text-[14px] ml-[5px] italic'>size : {123}</p>
                        </div>
                        <div className='flex items-center justify-between flex-wrap mt-3'>
                            <div className='flex items-center '>
                                <button className="active:bg-black active:text-white active:rounded-full"

                                >
                                    <AiOutlineMinus/>
                                </button>
                                <p className="text-[16px] md:text-[20px] font-bold leading-7 w-7 text-center mx-4">{123}</p>
                                <button className="active:bg-black active:text-white active:rounded-full">

                                    <AiOutlinePlus />
                                </button>
                            </div>
                            <p className="text-price-text text-[20px] md:text-[24px] font-bold">
                                <FormatPrice price={123000} />
                            </p>
                        </div>
                    </div>
                </div>
                

            </div>
        </div >
    )
}
