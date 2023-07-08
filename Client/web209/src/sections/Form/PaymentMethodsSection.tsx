import InputField from '@/components/hook-form/InputField';
import React from 'react'
import { useFormContext } from 'react-hook-form';
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa'
export default function PaymentMethodsSection() {
    const { register, formState: { errors } } = useFormContext();
    const listOption = [
        { id: 1, title: "Tiền mặt" },
        { id: 2, title: "Thẻ đã lưu" },
        { id: 3, title: "Thẻ tín dụng hoặc thẻ ghi nợ" },
    ]
    return (
        <div className="mt-[32px] max-w-[600px]">
            <h1 className="text-[#626262] font-bold text-base">Phương thức thanh toán</h1>
            <div className="mt-[36px] rounded-lg">
                {/* Render input title from list option */}
                {listOption.map(item =>
                    <div key={item.id} className={`p-4 border-[1px] border-[#626262] border-solid ${item.id === 1 ? "rounded-t-lg" : ""} ${item.id === 3 ? "rounded-b-lg" : ""}`}>
                        <div className={`flex items-center flex-wrap`}>
                            <input {...register("check")} value={item.title} className="w-6 h-6 mr-5" type="checkbox"
                            // choose 1
                            // onChange={() => {
                            //     if (option === item.id) {
                            //         setOption(undefined)
                            //     } else {
                            //         setOption(item.id)
                            //     }
                            // }}
                            // checked
                            // checked={option === item.id} 
                            />
                            <div className='flex-1 flex flex-wrap justify-between items-center'>

                                <label>{item.title}</label>
                                {/* id === 2 */}
                                {item.id === 2 && <div className="flex items-center  gap-[10px]">
                                    <span className='text-[20px]'>
                                        <FaCcVisa />
                                    </span>
                                    <p>***6699</p></div>}
                                {/* id === 3 */}
                                {item.id === 3 &&
                                    <div className="flex flex-wrap justify-between gap-[10px]">
                                        {/* <Visa /><MasterCard /><Paypal /> */}
                                        <span className='text-[20px]'>
                                            <FaCcVisa />
                                        </span>
                                        <span className='text-[20px]'>
                                            <FaCcMastercard />
                                        </span>
                                        <span className='text-[20px]'>
                                            <FaCcPaypal />
                                        </span>
                                    </div>}
                            </div>
                        </div>
                        {/* if option 3 is selected */}
                        {(item.id === 3) && //&& option === 3
                            <div className="mt-5">
                                {/* Number Card */}
                                <InputField
                                    styleInput="max-w-[515px] h-12 p-3 rounded-lg border-[#6E5544] border-[1px] border-solid"
                                    // styleMessage="text-msgEr text-sm"
                                    name="numberCard"
                                    placeholder="Nhập số thẻ" />
                                <div className="mt-6 flex justify-between flex-wrap">
                                    {/* Out of date */}
                                    <InputField
                                        styleInput="max-w-[238px] h-12 p-3 rounded-lg border-[#6E5544] border-[1px] border-solid"
                                        // styleMessage="text-msgEr text-sm"
                                        name="outOfDate"
                                        placeholder="Ngày hết hạn (MM/YY)" />
                                    {/* CVV */}
                                    <InputField
                                        styleInput="max-w-[238px] h-12 p-3 rounded-lg border-[#6E5544] border-[1px] border-solid"
                                        // styleMessage="text-msgEr text-sm"
                                        name="CVV"
                                        placeholder="Mã CVV" />
                                </div>
                            </div>
                        }
                    </div>
                )}
            </div>
            {/* Message Error */}
            {/* <span className="text-msgEr text-sm">{errors["check"]?.message}</span> */}
        </div>
    )
}
