import Button from '@/components/Button'
import FormProviderBox from '@/components/hook-form/FormProviderBox'
import InputField from '@/components/hook-form/InputField'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

export default function FormRegisterSection() {
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
        <div>
            {/* Form */}
            <FormProviderBox className={'px-10 mt-6 '} methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <div className="flex mt-[32px] justify-between">
                    {/* FirstName */}
                    <InputField
                        name="firstName"
                        styleInput="w-[129px] h-12 p-3 rounded-lg border-border-1 border-[1px] border-solid"
                        // styleMessage="text-msgEr text-sm"
                        placeholder="Họ"
                    />
                    {/* LastName */}
                    <InputField
                        name="lastName"
                        styleInput="w-[129px] h-12 p-3 rounded-lg border-border-1 border-[1px] border-solid"
                        // styleMessage="text-msgEr text-sm"
                        placeholder="Tên"
                    />
                    {/* Date */}
                    <InputField
                        name="dateOfBirth"
                        styleInput="w-[128px] h-12 p-3 rounded-lg border-border-1 border-[1px] border-solid text-xs"
                        // styleMessage="text-msgEr text-sm"
                        placeholder="DD/MM/YY"
                        type="date"
                    />
                </div>
                {/* Email */}
                <InputField
                    name="email"
                    styleInput="w-[410px] h-12 p-3 mt-6 rounded-lg border-solid border-border-1 border-[1px]"
                    // styleMessage="text-msgEr text-sm"
                    placeholder="Nhập email hoặc số điện thoại"
                />
                {/* Password */}
                <InputField
                    name="password"
                    styleInput="w-[410px] h-12 p-3 mt-6 rounded-lg border-solid border-border-1 border-[1px]"
                    // styleMessage="text-msgEr text-sm"
                    placeholder="Nhập mật khẩu ít nhất 8 kí tự"
                    type="password"
                />
                {/* Confirm Password */}
                <InputField
                    name="confirmPassword"
                    styleInput="w-[410px] h-12 p-3 mt-6 rounded-lg border-solid border-border-1 border-[1px]"
                    // styleMessage="text-msgEr text-sm"
                    placeholder="Xác thực lại mật khẩu"
                    type="password"
                />
                {/* Checkbox agree terms */}
                <div className="mt-6 flex items-center">
                    <div className="w-[37px]">
                        <InputField
                            name="check"
                            styleInput="cursor-pointer w-6 h-6 rounded-[4px] ml-1 mr-[9px]"
                            // styleMessage="text-msgEr text-sm"
                            type="checkbox"
                            
                        />
                    </div>
                    <label className="">
                        Tôi đã đọc và đồng ý với các{' '}
                        <Link to='/auth/register' className='font-medium'> điều khoản chính sách</Link>{' '}
                        của Miki Jewelry
                    </label>
                </div>
                {/* <span className="text-msgEr text-sm">{errors['check']?.message}</span> */}
                {/* Button register */}
                <Button primary
                    // disabled={disabled} primary={!disabled}
                    style="mt-[32px] w-full text-base hover:bg-bgr-auth hover:border-[1px] hover:text-black duration-300 hover:border-black"
                    content='Đăng ký' />
                {/* Go to regiter page */}
                <div className="flex mt-4 items-center mb-[84px]">
                    <h1 className="text-sm leading-[22px] mr-1">Bạn đã có tài khoản</h1>
                    <Link to='/auth/login' className='text-base leading-6 font-bold'>Đăng nhập</Link>
                </div>
            </FormProviderBox>
        </div>
    )
}