import { useGetCategoriesQuery } from "@/api/categories";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { getAllCategories } from "@/instance/Categories";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SortProduct() {
    const {data, isLoading} = useGetCategoriesQuery({})
    const [selectCate, setSelectCate] = useState<number|null>(null)
    const location = useLocation();
    const { pathname } = location;
    const navigate = useNavigate()
    const searchParams = new URLSearchParams(location.search);

    const handlePageClick = (index:number,id:string) => {
        setSelectCate(index)
        searchParams.set('category', String(id));
        searchParams.set('page', `1`);
        const newSearch = searchParams.toString();
        const newUrl = `${pathname}?${newSearch}`;
        navigate(newUrl)
        // window.scrollTo({ top: 500, behavior: 'smooth' });
    }
    return (
        <div className="">
            <h1 className="font-bold text-[23px] md:text-32 mb-[20px] leading-10">Danh mục sản phẩm</h1>
            <div className="flex md:flex-row-reverse flex-col md:gap-0 gap-5 justify-between items-center">
                <div className="flex items-center">
                    <select className="p-2 border-none flex-wrap min-w-[200px] rounded-[10px] border border-bgr" style={{ outline: 'none', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 5px 15px' }}>
                        <option disabled>Lọc</option>
                        <option value="asc">Giảm dần</option>
                        <option value=" ">Tăng dần</option>
                    </select>

                </div>

                <div>
                    <ul className="flex gap-5 cursor-pointer">
                        {data && data?.data?.map((item: any, index: any) => {
                            return <li onClick={() => handlePageClick(index,item._id)} key={item._id} className={`text-[rgba(0,0,0,0.6)] duration-500 
                            hover:border-b-[1px] hover:text-[#000] hover:border-[#000 ${selectCate === index ? "text-[rgba(0,0,0,1)] border-b-[1px] border-[#000]" : ''}`}>{item.name}</li>
                        })}

                    </ul>
                </div>

            </div>
        </div>
    )
}
