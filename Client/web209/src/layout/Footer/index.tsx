import AboutUs from '@/components/AboutUs'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook } from 'react-icons/bs'

export default function Footer() {
    return (
        <footer className="">
            <div className=" mt-[120px] ">
                <div className="flex flex-wrap justify-center gap-[40px] lg:grid lg:grid-cols-2 mb-[40px]">
                    <div className='lg:mb-[0] mb-[40px]'>
                        <h3 className="text-[25px] lg:text-[32px] line-[40px] font-bold text-primary-text mb-[20px] lg:mb-[40px] ">
                            Đăng kí để nhận khuyến mãi
                        </h3>
                        <div className="flex items-center justify-between max-w-[412px] w-full bg-white h-[48px] border-[1px] border-primary-text px-[16px] rounded-8">
                            <input type="text" placeholder="Nhập Email" className="h-[40px] w-full outline-0" />
                            {/* <ArrowRightIcon classNameIcon="cursor-pointer hover:scale-90 duration-300" /> */}
                        </div>
                    </div>
                    <div className="text-center lg:text-right" >
                        <h3 className="text-[25px] lg:text-[32px]  line-[40px] font-bold text-primary-text mb-[20px]">
                            Kết nối với chúng tôi tại
                        </h3>
                        <div className="flex w-full justify-end gap-[33px] ">
                            <span className='text-[35px]'>
                                <Link to=''>
                                <BsFacebook />
                                </Link>
                            </span>
                            <span className='text-[35px]'>
                                <Link to=''>
                                <BsFacebook />
                                </Link>
                            </span>
                            <span className='text-[35px]'>
                                <Link to=''>
                                <BsFacebook />
                                </Link>
                            </span>
                            <span className='text-[35px]'>
                                <Link to=''>
                                <BsFacebook />
                                </Link>
                            </span>
                            <span className='text-[35px]'>
                                <Link to=''>
                                <BsFacebook />
                                </Link>
                            </span>



                        </div>
                    </div>
                </div>
                <div className="pt-[40px] border-t-[1px] border-t-#6E5544 grid grid-rows-2 w-full lg:grid-rows-1 lg:grid-cols-[1.5fr,2fr] ">
                    <div className="text-center lg:text-left">
                        <Link to="/">
                            <h1 className="font-plf text-[40px] cursor-pointer font-bold text-primary-text mb-[28px]">
                                MIKI JEWLERY
                            </h1>
                        </Link>
                        <ul className="grid gap-[10px] ">
                            <li>Số GCNĐKDN: 2500150335</li>
                            <li>Cấp lần đầu: Ngày 26/03/2007</li>
                            <li>Đăng ký thay đổi lần thứ 16: Ngày 07/05/2018</li>
                            <li>Cơ quan cấp: Sở kế hoạch và đầu tư tỉnh Vĩnh Phúc</li>
                            <li>Địa chỉ: Phường Phúc Thắng, Thành phố Phúc Yên, Tỉnh Vĩnh Phúc, Việt Nam</li>
                        </ul>
                    </div>

                    <div className="mt-[50px] lg:mt-[0] flex flex-wrap justify-between lg:grid lg:grid-cols-3 grid-cols-2 gap-y-[30px]">
                        <AboutUs
                            className="font-bold text-[20px] mb-[20px]"
                            title="Về chúng tôi"
                            arr={['Thương hiệu', 'Lịch sử', 'Tuyển dụng']}
                        />
                        <AboutUs
                            className="font-bold text-[20px] mb-[20px]"
                            title="Tài khoản"
                            arr={['Lịch sử mua hàng', 'Giỏ hàng', 'Thông tin']}
                        />
                        <AboutUs
                            className="font-bold text-[20px] mb-[20px]"
                            title="Dịch vụ khách hàng"
                            arr={['Thanh toán', 'Cẩm nang sử dụng', 'Câu hỏi thường gặp']}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center py-[16px]">
                <p>MikiShop © 2022</p>
            </div>
        </footer>
    )
}
