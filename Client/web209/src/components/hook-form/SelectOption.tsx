import { useFormContext } from 'react-hook-form';
export function SelectOption({ name, label, styleLabel, styleInput,
    styleMessage, className, passwordErr, userNameErr, valueOption = [], mailErr, ...passProps }:any) {
    const {
        register,
        formState: { errors },
    } = useFormContext();
    return (
        <div className={className}>
            <label className={styleLabel} htmlFor={name}>
                {label}
            </label>
            <select id="cars" className={styleInput} {...register(name)} {...passProps}>
                {valueOption.map((item:any, index:any) => {
                    return (
                        <option key={index} value={item.value}>{item.name}</option>
                    )
                })}
            </select>
            <span className='text-[14px] italic text-red-600'>{errors[name]?.message || userNameErr || passwordErr || mailErr}</span>
        </div>
    )
}