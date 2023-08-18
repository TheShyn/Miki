import { Link, useLocation } from 'react-router-dom'
import { AiOutlineShoppingCart, AiOutlineBars, AiOutlineSearch, AiOutlineBell, AiOutlineUser } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { useAppSelector } from '@/app/hooks'
export default function Header() {
    const data = useAppSelector((state:any)=>state.user)
    console.log(data.isLogin);
    
    const [page, setPage] = useState("/")
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const location = useLocation()
    useEffect(() => {
        const get = `${location.pathname.split("/").pop()}`
        setPage(get || '/');

    }, [location])
    useEffect(() => {
        const handleClickOutside = (event:any) => {
            if (isDropdownOpen && !event.target.closest('#dropdownInformationButton')) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isDropdownOpen]);
    return (
        <>
            <header>
                <div className="flex justify-between py-[24px] gap-[5px]">
                    <div className="flex items-end">
                        <ul className="md:flex md:justify-between hidden md:gap-[10px] lg:gap-[42px]">
                            <li className="py-[4px]">
                                <Link to="/">
                                    <a className={`text-16 hover:text-3rd-text  ${page == '/' ? 'font-bold' : ''}`}>Trang chủ</a>
                                </Link>
                            </li>
                            <li className="py-[4px]">
                                <Link to="/products">
                                    <a className={`text-16 hover:text-3rd-text  ${page == 'products' ? 'font-bold' : ''}`}>Sản phẩm</a>
                                </Link>
                            </li>
                            <li className="py-[4px]">
                                <Link to="/aboutus/brandandhistory">
                                    <a className={`text-16 hover:text-3rd-text  ${page == 'brandandhistory' ? 'font-bold' : ''}`}>Về chúng tôi</a>
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
                                <Link to="/cart">
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
                                <Link to={`${data.isLogin ? "#" : '/auth'}`}>
                                    <span className='text-[20px] flex relative'>
                                        <button id="dropdownInformationButton" onClick={toggleDropdown} data-dropdown-toggle="dropdownInformation" type="button">
                                            <AiOutlineUser />
                                        </button>
                                        {isDropdownOpen && data.isLogin && (
                                            <div className="absolute z-10 top-[130%] right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                                                    <li>
                                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Thông tin cá nhân</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Đơn hàng</a>
                                                    </li>
                                                </ul>
                                                <div className="py-2">
                                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Sign out</a>
                                                </div>
                                            </div>
                                        )}
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
