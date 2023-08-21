import { useGetAllUsersQuery } from '@/api/users'
import { useEffect } from 'react'
import { AiOutlineSearch } from "react-icons/ai"
import { Link } from 'react-router-dom'
type Props = {}

export default function UserMana({ }: Props) {
    const {data, isLoading} = useGetAllUsersQuery()
    if(isLoading) return <div>Loading....</div>
    const handleDelete = (id: string) => {

        const a = confirm("Bạn có muốn xóa người dùng này không ? ")
        if (a) {
            // dipatch(deleteCate(id))

        }
    }
    return (
        <div className='mt-[50px]'>
            <div className='flex justify-between items-center flex-wrap'>
                <h1 className='mb-5 text-2xl'>Quản lí người dùng</h1>
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
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Avatar
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Role
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.data.map((item: any, index: string) => {
                            return (

                                <tr key={index} className="bg-white border-b ">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        {item.firstName + " " + item.lastName}
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        <img className='max-w-[30px]' src={item?.avatar} alt="" />
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        {item.email}
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        {item.status}
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        {item.role}
                                    </th>

                                    <td className="px-6 py-4">
                                        <div className={`flex flex-wrap gap-3 ${item.role ==='admin' ? 'hidden' : ""}`}>
                                            <button className={`${item._id === '64822a45fe4657527476ecd9' ? 'hidden' : ''}`} onClick={() => handleDelete(item._id)}>Delete</button>
                                            <button >
                                                <Link to={`/admin/users/edit/${item?._id}`}>
                                                    Edit
                                                </Link>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
{/*  */}

                    </tbody>
                </table>
            </div>
        </div>


    )
}