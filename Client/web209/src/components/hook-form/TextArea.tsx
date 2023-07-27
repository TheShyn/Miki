import { FieldError, useFormContext } from 'react-hook-form';
export function TextArea({ name, label, styleLabel, styleInput,
  styleMessage, className, defaultValueArea ,rows = 1, ...passProps }:any) {

  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error: FieldError | any = errors[name];
  return (
    <div className={className}>
      <label className={styleLabel} htmlFor={name}>
        {label}
      </label>
      <textarea className={styleInput} {...register(name)} {...passProps} value={defaultValueArea} rows={rows}></textarea>
      <span className='text-[14px] italic text-red-600'>{error?.message}</span>
    </div>
  )
}