import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'


export default function LayoutClient() {
    return (
        <div className='bg-bgr'>
        <div className=' max-w-[1440px] mx-auto'>
            <div className='w-full px-[50px]'>
                <nav>
                    <Header />
                </nav>
                <div className='min-h-[80vh]'>

                    <Outlet />
                </div>
                <footer>
                    <Footer />
                </footer>

            </div>
        </div>

        </div>
    )
}
