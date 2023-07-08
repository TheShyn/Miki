import React from 'react'
import { useFormContext } from 'react-hook-form';
type Props = {
  label?: string,
  styleLabel?: string,
  value?: string,
  placeholder?: string,
  styleInput?: string,
  name: string,
  type?:string
  className?:string
  passPort?: any
}

export default function InputField({type='text',className, label = '', styleInput = '',name, placeholder = '',styleLabel, passPort }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={`flex flex-col mb-6 ${className}`}>
      {label && <label className={`ml-2 mb-2 ${styleLabel}`} htmlFor={`${name}`}>{label}</label>}
      <input type={type} {...passPort} {...register(name)} className={`border border-btn p-2 rounded-md ${styleInput}`} placeholder={placeholder} name={`${name}`} />

    </div>
  )
}