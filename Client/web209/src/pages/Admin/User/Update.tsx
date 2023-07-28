import { useAppDispatch, useAppSelector } from "@/app/hooks";
import Button from "@/components/Button";
import FormProviderBox from "@/components/hook-form/FormProviderBox";
import InputField from "@/components/hook-form/InputField";
import { SelectOption } from "@/components/hook-form/SelectOption";
import { getUser, updateUser } from "@/instance/User";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import * as yup from 'yup';
type Props = {}

export default function UpdateUser({ }: Props) {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state: any) => state.user)
  const phoneNumberRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
  const schema = yup.object().shape({
    firstName: yup.string().required('Nhập tên đệm'),
    lastName: yup.string().required('Nhập tên'),
    phoneNumber: yup.string().matches(phoneNumberRegExp, 'Số điện thoại không hợp lệ').required('Nhập số điện thoại'),

  });
  const methods = useForm<any>({
    resolver: yupResolver(schema),
    reValidateMode: 'onBlur',
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      role: user?.role,
      birthday: user?.birthday?.substring(0, user?.birthday.indexOf('T')),
      gender: user?.gender,
      phoneNumber: user?.phoneNumber
    },
  });
  const optionRole = [
    {
      value: 'admin',
      name: "Quản lí"
    },
    {
      value: 'user',
      name: "Người dùng"
    },
  ]
  const { handleSubmit, reset, control } = methods;
  const onSubmit = async (data: any) => {
    if(data){
      const dataUp = {
        firstName: data.firstName,
        lastName: data.lastName,
        role: data.role,
        phoneNumber: data.phoneNumber
      }
      dispatch(updateUser({id, data:dataUp}))
    }

  }
  useEffect(() => {
    dispatch(getUser(`${id}`))
    reset({
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      role: user?.role,
      birthday: user?.birthday?.substring(0, user?.birthday.indexOf('T')),
      gender: user?.gender,
      phoneNumber: user?.phoneNumber
    })
  }, [user?.firstName])
  return (
    <div className='mt-[50px]'>
      <div className='flex justify-between items-center flex-wrap'>
        <h1 className='mb-5 text-2xl'>Thay đổi thông tin user</h1>

      </div>
      <FormProviderBox className="" methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-[40px] w-full">
          <InputField
            styleInput="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            className="flex flex-col"
            name="firstName"
            type="text"
            placeholder="Tên người dùng..."
          />
          <InputField
            styleInput="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            className="flex flex-col"
            name="lastName"
            type="text"
            placeholder="Tên người dùng..."
          />

        </div>
        <InputField
          styleInput="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          className="flex flex-col"
          name="email"
          type="text"
          readOnly
          placeholder="Email..."
        />
        <div className="grid grid-cols-2 gap-[40px] w-full">
          <InputField
            styleInput="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            className="flex flex-col"
            name="birthday"
            type="date"
          />
          <InputField
            styleInput="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            className="flex flex-col"
            name="phoneNumber"
            type="number"
            placeholder="+12345678..."
          />
        </div>
        <SelectOption
          className="mt-[30px]"
          styleInput="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          valueOption={optionRole}
          name="role"
        />
        <Button primary style="mt-5" type='submit' content="Xác nhận" />
      </FormProviderBox>
    </div>
  )
}