import React from 'react'
import { FieldError, useFormContext } from 'react-hook-form';
type Props = {
  label?: any,
  styleLabel?: string,
  value?: string,
  placeholder?: string,
  styleInput?: string,
  name: string,
  type?:string
  className?:string
  passPort?: any,
  isArray?: boolean,
  onChange?: (e: any) => void,
  mutiple?: boolean,
  readOnly?: boolean
}

export default function InputField({type='text',className, readOnly=false,label = '', styleInput = '',name, placeholder = '',styleLabel, isArray=false, onChange, mutiple=false }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error: FieldError | any = errors[name];  
  const [baseName, index, subName] = isArray ? name.split('.') : []
  const errorDynamic: FieldError | any = isArray ? errors?.[baseName]?.[+index]?.[subName]?.message : ''
  
  
  return (
    <div className={`flex flex-col mb-6 ${className}`}>
      {label && <label className={`ml-2 mb-2 ${styleLabel}`} htmlFor={`${name}`}>{label}</label>}
      <input readOnly = {readOnly} type={type} {...register(name)} className={`border border-btn p-2 rounded-md ${styleInput}`} id={name} placeholder={placeholder} name={`${name}`} onChange={onChange} multiple = {mutiple}/>
    <span className='text-[14px] italic text-red-600'>{isArray ?  errorDynamic : error?.message}</span>
    </div>
  )
}