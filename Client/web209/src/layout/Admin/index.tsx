import { Outlet, useNavigate } from 'react-router-dom'
import Nav from './Nav'
import Sidebar from './SideBar'
import { useEffect } from 'react'
import { useAppSelector } from '@/app/hooks'
type Props = {}

export default function LayoutAdmin({ }: Props) {
    const navigate = useNavigate()
    const user = useAppSelector((state:any)=> state.user)
    useEffect(()=>{
        if(user.isLogin){
            if(user.user.role !== 'admin'){
                navigate("/")

            }
        }else{
            navigate("/auth")
        }
    },[user.isLogin])
    return (
        <div className='flex'>
            <Sidebar />
            <div className='flex-1'>
                <Nav />
                <div className='mt-3 mx-3'>
                    <Outlet />

                </div>

            </div>
        </div>
    )
}