import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { getAllOrder, updateOrder } from '@/instance/Cart'
import { useEffect } from 'react'
import { AiOutlineSearch } from "react-icons/ai"
type Props = {}

export default function OrderMana({ }: Props) {
    const data = useAppSelector((state: any) => state.cart)
    console.log(data);
    const dipatch = useAppDispatch()
    const status = [
        {
            name: "PENDING"
        },
        {
            name: "SHIPPING"
        },
        {
            name: "SUCCESS"
        },
        {
            name: "CANCELLED"
        },
    ]

    const handleChangeStatus = (e:any,id:any)=>{
        console.log(e.target.value);
        console.log(id);
        const data:any = {
            status : e.target.value
        }
        dipatch(updateOrder({id, data}))
    }
    useEffect(()=>{
        dipatch(getAllOrder())
    },[])
    return (
        <div className='mt-[50px]'>
            <div className='flex justify-between items-center flex-wrap'>
                <h1 className='mb-5 text-2xl'>Quản lí đơn hàng</h1>
                <div className='bg-white flex items-center px-2 rounded-8 py-1 border border-1 boder-#ccc'>
                    <input placeholder='Search...' className='text-black outline-none border-none' type="text" />
                    <AiOutlineSearch className='text-black' />
                </div>
            </div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Mã
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Người dùng
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Số điện thoại
                            </th>
                            <th scope="col" className="px-6 py-3">
                               Trạng thái
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.carts.map((item: any, index: string) => {
                            return (

                                <tr key={index} className="bg-white border-b ">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        {item._id.slice(0,5)}
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        {item.name}
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        {item.phoneNumber}
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        <select onChange={(e)=>handleChangeStatus(e,item._id)} name="" defaultValue={item.status} disabled = {item.status=="SUCCESS" || item.status=="CANCELLED" ? true : false} id="">
                                            {status.map((item:any)=>{
                                                return (
                                                    <option value={item.name}>{item.name}</option>
                                                )
                                            })}
                                        </select>
                                    </th>
                                </tr>
                            )
                        })}


                    </tbody>
                </table>
            </div>
        </div>


    )
}