import Page from '@/components/Page'
import FormLoginSection from '@/sections/Auth/FormLoginSection'
import ImgLogin from '@/assets/static/Login/Login.jpg'
import BackGround from '@/assets/static/Login/bg.avif'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <Page title="Login">
        <div className="app py-[50px] bg-bgr" style={{background: `url("${BackGround}") top center `}}>
          <div className="flex justify-center">
            <div className="flex">
              {/* Image */}
              <img width={646} src={ImgLogin} alt="imgRegister" className="max-h-[700px] object-cover rounded-l-16 hidden lg:block" />
              {/* Content */}
              <div className="w-[490px] bg-bgr rounded-r-16">
                <div className="flex items-center flex-col mt-14 ">
                  {/* Respondsive Logo */}
                  <Link to='/'>
                    <a className='flex flex-col items-center'>
                      {/* <LogoIcon  /> */}
                      <h1 className="font-plf font-bold text-[40px] leading-[48px]  ">MIKI JEWELRY</h1>
                    </a>
                  </Link>
                </div>
                {/* Form name */}
                <h3 className="text-xl leading-7 font-bold ml-10 mt-[72px] ">Đăng nhập</h3>
                {/* Login form */}
                <FormLoginSection />
              </div>
            </div>
          </div>
          {/* Decoration background */}
        </div>
      </Page>
  )
}
