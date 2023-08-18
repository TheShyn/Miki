import { useGetCategoriesQuery, useRemoveCateMutation } from '@/api/categories'
import Pagination from '@/components/Panigation'
import { useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters, AiOutlinePlus, AiOutlineSearch } from "react-icons/ai"
import { Link, useLocation } from 'react-router-dom'
type Props = {}

export default function CategoriesMana({ }: Props) {

    const [page, setPage] = useState<any>(1)
    // const data = useAppSelector((state: any) => state.categories)
    const { data, isLoading } = useGetCategoriesQuery({ limit: 2, page: page })
    const [deleteCate, { isLoading: loadingDelete }] = useRemoveCateMutation()
    const location = useLocation()
    const [indexDelete, setIndexDelete] = useState<any>()
    const searchParams = new URLSearchParams(location.search);

    const handleDelete = async (id: string) => {
        console.log(id);
        setIndexDelete(id)
        const a = confirm("Bạn có muốn loại sản phẩm này không ? ")
        if (a) {
            // dipatch(deleteCate(id))
            await deleteCate(id).unwrap().then((data)=>{
                console.log(data);
                
            })
        }
    }

    useEffect(() => {
        let tempPage
        if (searchParams.has('page')) tempPage = searchParams.get('page');
        setPage(tempPage)
    }, [location.search])
    return (
        <div className='mt-[50px]'>
            <div className='flex justify-between items-center flex-wrap'>
                <h1 className='mb-5 text-2xl'>Quản lí sản phẩm</h1>
                <div className='bg-white flex items-center px-2 rounded-8 py-1 border border-1 boder-#ccc'>
                    <input placeholder='Search...' className='text-black outline-none border-none' type="text" />
                    <AiOutlineSearch className='text-black' />
                </div>
            </div>
            <div className='mb-4'>
                <Link to='/admin/categories/add' className='max-w-[30px] flex justify-center items-center py-1 cursor-pointer'>
                    <AiOutlinePlus />

                </Link>
            </div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.data?.map((item: any, index: string) => {
                            return (

                                <tr key={index} className="bg-white border-b ">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        {item.name}
                                    </th>

                                    <td className="px-6 py-4">
                                        <div className='flex flex-wrap gap-3'>
                                            <button className={`text-red-400 ${item._id === '64822a45fe4657527476ecd9' ? 'hidden' : ''}`} onClick={() => handleDelete(item._id)}>
                                                {loadingDelete && indexDelete == item._id ? <AiOutlineLoading3Quarters className='animate-spin' /> : "Xóa"}

                                            </button>
                                            <button className='text-blue-400'>
                                                <Link to={`/admin/categories/edit/${item?._id}`}>
                                                    Edit
                                                </Link>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}


                    </tbody>
                </table>
            </div>
            <Pagination pageCount={data?.totalPages || 0} scroll={600} />
        </div>


    )
}