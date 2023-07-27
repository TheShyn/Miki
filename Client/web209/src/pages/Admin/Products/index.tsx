import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { deleteProduct, getAllProducts } from '@/instance/Products'
import React, { useEffect } from 'react'
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai"
import { Link } from 'react-router-dom'
type Props = {}

export default function ProductsMana({ }: Props) {
    const data = useAppSelector((state: any) => state.products)
    console.log(data);
    
    const dipatch = useAppDispatch()
    const handleDelete = (id:string)=>{
        const a = confirm("Bạn có muốn xóa sản phẩm này không ? ")
        if(a){
            dipatch(deleteProduct(id))
            
        }
    }
    useEffect(() => {
        
        dipatch(getAllProducts({}))
    }, [])
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
                <Link to='/admin/products/add' className='max-w-[30px] flex justify-center items-center py-1 cursor-pointer'>
                    <AiOutlinePlus />

                </Link>
            </div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Discount
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Size
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.products.map((item: any, index: string) => {
                            return (

                                <tr key={index} className="bg-white border-b ">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        {item.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        <img className='max-w-[80px]' src={item?.images[0]} alt="" />
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.categoryId.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.discount}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.storage.map((item: any, index: string) => {
                                            return (
                                                <div key={index} className='pb-1 border-b'>
                                                    <span>{item.size}: {item.price}</span>
                                                </div>

                                            )
                                        })}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className='flex flex-wrap gap-3'>
                                            <button onClick = {()=>handleDelete(item._id)}>Delete</button>
                                            <button>
                                                <Link to={`/admin/products/edit/${item.slug}`}>
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
        </div>


    )
}