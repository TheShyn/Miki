import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart, AiOutlineBars, AiOutlineSearch, AiOutlineBell, AiOutlineUser } from 'react-icons/ai'
export default function Header() {
    return (
        <>
            <header>
                <div className="flex justify-between py-[24px] gap-[5px]">
                    <div className="flex items-end">
                        <ul className="md:flex md:justify-between hidden md:gap-[10px] lg:gap-[42px]">
                            <li className="py-[4px]">
                                <Link to="/">
                                    <a className="text-16 hover:text-3rd-text duration-500 font-bold">Trang chủ</a>
                                </Link>
                            </li>
                            <li className="py-[4px]">
                                <Link to="/products">
                                    <a className="text-16 hover:text-3rd-text duration-500 ">Sản phẩm</a>
                                </Link>
                            </li>
                            <li className="py-[4px]">
                                <Link to="/aboutus/brandandhistory">
                                    <a className="text-16 hover:text-3rd-text duration-500">Về chúng tôi</a>
                                </Link>
                            </li>
                        </ul>
                        <div className='md:hidden pb-[5px]'>
                            <span className='text-[20px]'>
                                <AiOutlineBars />

                            </span>

                        </div>
                    </div>
                    <div className="flex flex-col  items-center">
                        <Link to="/" className="flex justify-center">
                            <h1 className="cursor-pointer align-center font-plf lg:text-[35px] text-[20px]  font-bold mt-[12px] text-primary-text leading-10 text-center">
                                MIKI JEWELRY
                            </h1>
                        </Link>
                    </div>
                    <div className="flex items-end">
                        <ul className="flex justify-between items-end gap-[22px]">
                            <li className='hidden md:block'>

                                <div className="flex px-[15px] items-center w-[100px] md:w-[200px]  border border-btn rounded-[10px] overflow-hidden">
                                    <input
                                        placeholder="Tìm kiếm sản phẩm"
                                        className="h-[32px] bg-bgr text-[14px] px-[5px] border-0 outline-0 flex-1 w-[50px] md:w-[150px]"
                                    />

                                    <AiOutlineSearch />
                                </div>

                            </li>
                            <li className='hidden lg:block'>
                                <Link to="/aboutus/brandandhistory">
                                    <span className='text-[20px]'>
                                        <AiOutlineShoppingCart />

                                    </span>
                                </Link>
                            </li>
                            <li className='hidden lg:block'>
                                <Link to="/aboutus/brandandhistory">
                                    <span className='text-[20px]'>
                                        <AiOutlineBell />

                                    </span>
                                </Link>
                            </li>
                            <li className='hidden md:block'>
                                <Link to="/aboutus/brandandhistory">
                                    <span className='text-[20px]'>
                                        <AiOutlineUser />

                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header >
        </>
    )
}
