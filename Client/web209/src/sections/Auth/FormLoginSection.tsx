import { useAppDispatch, useAppSelector } from '@/app/hooks';
import Button from '@/components/Button'
import FormProviderBox from '@/components/hook-form/FormProviderBox'
import InputField from '@/components/hook-form/InputField'
import { authLogin, login } from '@/instance/Auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

export default function FormLoginSection() {
    const data = useAppSelector((state:any)=>state.auth)
    const dispatch = useAppDispatch()
    console.log(data);    
    const schema = yup.object().shape({
        email: yup
            .string()
            .required('Vui lòng nhập email')
            .matches(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                'Email không tồn tại'
            ),
        password: yup.string().trim().required('Vui lòng nhập mật khẩu').min(6, 'Nhập mật khẩu có ít nhất 6 kí tự'),
    });
    const methods = useForm({
        reValidateMode: 'onBlur',
        resolver: yupResolver(schema),
    });
    const { handleSubmit, reset } = methods;
    const onSubmit = (data: any) => {
        if(data){
            dispatch(authLogin(data))

        }
    }
    
    return (
        <div>
            {/* Form */}
            {data.error ?
                <span className='mt-3 align-middle flex justify-center bg-red-200 mx-[30px] py-2 text-red-600'>{data.error}</span>
                :
                undefined
            }
            {data.isLogin ?
                <span className='mt-3 align-middle flex justify-center bg-green-200 mx-[30px] py-2 text-green-600'>Đăng nhập thành công</span>
                :
                undefined
            }
            <FormProviderBox className={'px-10 mt-6 '} methods={methods} onSubmit={handleSubmit(onSubmit)}>
                {/* Email */}
                <InputField
                    name="email"
                    styleInput="p-3"
                    // styleMessage="text-msgEr text-sm"
                    placeholder="Nhập email hoặc số điện thoại"
                // userNameErr={errUserName}
                />
                {/* Password */}
                <InputField
                    className="mb-4"
                    name="password"
                    type='password'
                    styleInput="p-3"
                    // styleMessage="text-msgEr text-sm"
                    placeholder="Nhập mật khẩu ít nhất 8 kí tự"
                // type="password"
                // passwordErr={errPassword}
                />
                {/* Button forgot password */}
                <Link to='/auth/forgotpassword' className='text-sm hover:underline leading-[22px] font-medium text-black'>Quên mật khẩu ?</Link>
                {/* Button Sign in */}
                <Button primary

                    // disabled={disabled} primary={!disabled}
                    style="mt-[32px] w-full text-base hover:bg-bgr-auth hover:border-[1px] hover:text-black duration-300 hover:border-black"
                    content='Đăng nhập' />

                {/* <button>dasd</button> */}

                <div className="flex mt-4 items-center mb-[84px]">
                    <h1 className="text-sm leading-[22px] mr-1">Bạn chưa có tài khoản</h1>
                    <Link to='/auth/register' className='text-base leading-6 font-bold text-price-text'>Đăng kí</Link>
                </div>
            </FormProviderBox>
        </div>
    )
}