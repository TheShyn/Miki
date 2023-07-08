import Page from '@/components/Page'
import BackGround from '@/assets/static/Login/bg.avif'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import FormProviderBox from '@/components/hook-form/FormProviderBox'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import InputField from '@/components/hook-form/InputField'
import Button from '@/components/Button'
export default function ForgotPass() {
    const schema = yup.object().shape({})
    const methods = useForm({
        reValidateMode: 'onBlur',
        resolver: yupResolver(schema),
    });
    const { handleSubmit, reset } = methods;
    const onSubmit = (data: any) => {
        console.log(data);

    }
    return (
        <Page title="Login">
            <div className="app py-[50px] h-[100vh] bg-bgr" >
                <div className="flex justify-center w-full h-full">
                    <div className='my-auto'>

                        <div className="flex flex-col rounded w-[600px] py-[50px] px-[30px] bg-white shadow-sm">

                            <h1 className='font-bold text-[18px] text-center'>
                                Xác thực tài khoản
                            </h1>

                            <span className='mt-[30px] text-center text-[14px]'>Vui lòng nhập địa chỉ email được liên kết với tài khoản của bạn, chúng tôi sẽ gửi mã xác thực để đặt lại mật khẩu</span>

                            <FormProviderBox className={'px-10 mt-6 '} methods={methods} onSubmit={handleSubmit(onSubmit)}>
                                <InputField
                                    name="firstName"
                                    type='email'
                                    // styleMessage="text-msgEr text-sm"
                                    placeholder="Nhập email"
                                />
                                <Button style='w-full' type='submit' primary content='Xác nhận' />
                                <Button style='w-full mt-3 bg-white text-btn hover:bg-btn hover:text-white' primary content='Trở về' />
                            </FormProviderBox>

                        </div>
                    </div>
                </div>
                {/* Decoration background */}
            </div>
        </Page>
    )
}
