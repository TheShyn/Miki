import FormProviderBox from '@/components/hook-form/FormProviderBox'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import Button from '@/components/Button';
import DeliveryAddress from '../Form/DeliveryAddress';
import PaymentMethodsSection from '../Form/PaymentMethodsSection';
import ProductSections from '../Form/ProductSection';

export default function PaymentSection() {
    let schema = yup.object().shape({})
    const methods = useForm({
        reValidateMode: 'onBlur',
        resolver: yupResolver(schema),
        defaultValues: {
            firstName: "",
            lastName: "",
            city: "",
            district: "",
            ward: "",
            specificAddress: "",
            phoneNumber: "",
        }
    });
    const { handleSubmit, reset } = methods;
    const onSubmit = async (data: any) => {

    }
    return (
        <div className="w-[1136px] ">
            <h1 className="text-[32px] mobile:text-[24px] leading-10 mobile:leading-8 font-bold mobile:font-semibold mobile:ml-[16px]">Trang thanh toán</h1>
            {/* Form */}
            <FormProviderBox methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <div className="flex lg:flex-row flex-col-reverse items-center lg:items-start mt-12 justify-between lg:gap-5 gap-[30px]  mb-10 ">
                    <div className="flex flex-col">
                        {/* Delivery Address */}
                        <DeliveryAddress />
                        {/* Payment Methods */}
                        {/* <PaymentMethodsSection option={option} setOption={setOption} /> */}
                        <PaymentMethodsSection/>
                        <div className="flex flex-wrap gap-3 justify-between mt-5">
                            {/* Button submit */}
                            <Button primary type="submit" className=" hover:bg-bgr-auth hover:border-[1px] hover:text-black duration-300 hover:border-black" content='Thanh toán' />
                            {/* Button switch to cart page  */}
                            <Button primary to="/" className="text-black ml-[179px] " style='bg-bgr text-btn ' content='Trở lại giỏ hàng' />
                        </div>
                    </div>
                    {/* Products */}
                    <ProductSections />
                </div>

            </FormProviderBox>
        </div>
    )
}
