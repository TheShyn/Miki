import InputField from '@/components/hook-form/InputField'

export default function DeliveryAddress() {
    return (
        <div className="">
            <h1 className="text-[#626262] font-bold text-base">Địa chỉ giao hàng</h1>
            <div className="flex flex-wrap mt-[16px]">
                {/* First Name */}
                <InputField
                    styleInput="max-w-[254px]  p-3 rounded-lg border-[#6E5544] border-[1px] border-solid mr-[40px]"
                    // styleMessage="text-msgEr text-sm"
                    name="firstName"
                    placeholder="Họ" />
                {/* Last Name */}
                <InputField
                    styleInput="max-w-[254px]  p-3 rounded-lg border-[#6E5544] border-[1px] border-solid"
                    // styleMessage="text-msgEr text-sm"
                    name="lastName"
                    placeholder="Tên" />
            </div>
            <div className="flex flex-wrap  mt-[32px] ">
                {/* Conscious/City */}
                <InputField
                    styleInput="max-w-[156px] h-12 p-3 rounded-lg border-[#6E5544] border-[1px] border-solid mr-[40px] "
                    // styleMessage="text-msgEr text-sm"
                    name="city"
                    placeholder="Tỉnh/Thành phố" />
                {/* District */}
                <InputField
                    styleInput="max-w-[156px] h-12 p-3 rounded-lg border-[#6E5544] border-[1px] border-solid mr-[40px] mobile:mb-[32px]"
                    // styleMessage="text-msgEr text-sm"
                    name="district"
                    placeholder="Quận/Huyện" />
                {/*Ward */}
                <InputField
                    styleInput="max-w-[156px] h-12 p-3 rounded-lg border-[#6E5544] border-[1px] border-solid"
                    // styleMessage="text-msgEr text-sm"
                    name="ward"
                    placeholder="Phường/Xã" />
            </div>
            {/* Specific Address */}
            <InputField
                styleInput="max-w-[548px] h-12 p-3 rounded-lg border-[#6E5544] border-[1px] border-solid mt-[32px]"
                // styleMessage="text-msgEr text-sm"
                name="specificAddress"
                placeholder="Địa chỉ cụ thể" />
            {/* Phone Number */}
            <InputField
                styleInput="max-w-[548px] h-12 p-3 rounded-lg border-[#6E5544] border-[1px] border-solid mt-[32px]"
                // styleMessage="text-msgEr text-sm"
                name="phoneNumber"
                placeholder="Số điện thoại" />
           
        </div>
    )
}
