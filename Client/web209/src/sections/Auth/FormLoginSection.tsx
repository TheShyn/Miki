import { useLoginMutation } from '@/api/auth';
import { useAppDispatch } from '@/app/hooks';
import Button from '@/components/Button';
import FormProviderBox from '@/components/hook-form/FormProviderBox';
import InputField from '@/components/hook-form/InputField';
import { getCartUser } from '@/slices/CartUser';
import { getUser } from '@/slices/User';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';

export default function FormLoginSection() {
    const navigate = useNavigate()
    const [Login] = useLoginMutation()
    const dispatch = useAppDispatch()
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
        if (data) {
            Login(data).unwrap().then((data:any)=>{
                const dataUser = {
                    accessToken: data.accessToken,
                    ...data.user
                }
                console.log('loginSuccess');
                dispatch(getUser(dataUser))
                dispatch(getCartUser(data?.user?.cart))
                toast.success("Đăng nhập thành công");
                setTimeout(() => {
                    navigate('/')
                    
                }, 2000);
            }).catch((error:any) => {
                console.log(error);
                toast.error(error?.data?.message || "some thing error");
            })

        }
    }

    return (
        <div>
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