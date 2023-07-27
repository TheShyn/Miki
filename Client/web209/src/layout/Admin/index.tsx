import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Sidebar from './SideBar'
type Props = {}

export default function LayoutAdmin({ }: Props) {
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