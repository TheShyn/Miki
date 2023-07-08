import React from 'react'
import { Link } from 'react-router-dom'
import Ring from '@/assets/static/cateViewImgs/ring.png';
import EarRing from '@/assets/static/cateViewImgs/earring.jpg';
import Bangles from '@/assets/static/cateViewImgs/bangles.png';
import NeckLace from '@/assets/static/cateViewImgs/necklace.jpg';
import Watch from '@/assets/static/cateViewImgs/watch.png';
export default function CateSection() {
    return (
        <div className=" mt-[150px] flex justify-center mx-auto">

            <div className="flex gap-[20px] text-white md:flex-row flex-col md:items-center flex-wrap font-bold text-2xl">
                <div className="flex flex-col lg:mb-[0] mb-[20px]">
                    <div className="flex lg:flex-row md:flex-col ">
                        <div className="relative pr-[20px] lg:mb-[31px] drop-shadow-product">
                            <p className="absolute left-[50%] tranform transform -translate-x-1/2 text_ACenter top-[80%] text-[14px] lg:text-[24px] ">Nhẫn</p>
                            <Link to='/product?category=nhan&sort=+'>
                                <a>
                                    <img src={Ring} className='-z-10 rounded-tl-16 w-[254px] lg:w-[254px] h-[254px]' alt="" />
                                </a>
                            </Link>
                        </div>
                        <div className="relative pr-[20px] drop-shadow-product h-[254px]">
                            <p className="absolute left-[50%] tranform transform -translate-x-1/2 text_ACenter top-[80%] text-[14px] lg:text-[24px] ">Đồng hồ</p>
                            <Link to='/product?category=dong-ho&sort=+'>
                                <a>
                                    <img src={Watch} className='-z-10 lg:rounded-tl-16 w-[254px] lg:w-[254px] h-[254px]' alt="" />
                                </a>
                            </Link>
                        </div>
                        <div className=" items-center hidden lg:flex">
                            <h2 className="drop-shadow-product text-5xl min-w-full text-center leading-[48px] font-bold pl-[20px] text-primary-text">Miki jewelry</h2>
                        </div>
                    </div>
                    <div className=" flex lg:flex-row lg:gap-[0]  md:flex-col">
                        <div className="relative pr-[20px] drop-shadow-product">
                            <p className="absolute left-[50%] tranform transform -translate-x-1/2 text_ACenter top-[80%] text-[14px] lg:text-[24px] ">Lắc tay</p>
                            <Link to='/product?category=lac-tay&sort=+'>
                                <a>
                                    <img src={Bangles} className='-z-10 lg:rounded-bl-16 w-[254px] lg:w-[450px] h-[254px]' alt="" />
                                </a>
                            </Link>
                        </div>
                        <div className="relative pr-[20px] drop-shadow-product">
                            <p className="absolute left-[50%] tranform transform -translate-x-1/2 text_ACenter top-[80%] text-[14px] lg:text-[24px] ">Dây chuyền</p>
                            <Link to='/product?category=day-chuyen&sort=+'>
                                <a>
                                    <img src={NeckLace} className='-z-10 min-h-[254px] rounded-sm w-[254px] lg:w-[352px] h-[254px]' alt="" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="relative drop-shadow-product flex">
                    <p className="absolute left-[50%] tranform transform -translate-x-1/2 text_ACenter top-[80%] text-[14px] lg:text-[24px] ">Bông tai</p>
                    <Link to='/product?category=bong-tai&sort=+'>
                        <a >

                            <img src={EarRing} className='-z-10 rounded-r-16 w-[full] h-[548px]' alt="" />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
