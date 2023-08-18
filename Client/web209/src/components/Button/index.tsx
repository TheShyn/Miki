import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import buttonStyle from './button.module.css'
interface IButton {
  content: any,
  style?: string,
  styleLeftIcon?: string,
  leftIcon?: React.ReactNode,
  rightIcon?: React.ReactNode,
  styleRightIcon?: string
  to?: string,
  primary?: boolean,
  secondary?: boolean,
  text?: boolean,
  outline?: boolean,
  disabled?: boolean,
  styleContent?: string,
  passProps?: React.ButtonHTMLAttributes<HTMLButtonElement>,
  className?:string,
  type?:any
}
export default function Button({ style = "",
  leftIcon = '', rightIcon = '',
  styleLeftIcon = '',
  styleRightIcon = '',
  content = 'Button',
  to = '',
  primary = false,
  secondary = false,
  styleContent = '',
  passProps,
  className,
  type='button'
}: IButton) {
  // const router = useNavigate();
  // if(to) {
  //   router(`${to}`)
  // }
  let classes: string = buttonStyle.secondary
  if (primary) {
    classes = buttonStyle.primary;
  }

  return (
    // <Link to={to.length ? to : ''}>
      <button  className={`rounded-lg leading-6 text-base flex items-center 
    justify-center cursor-pointer font-bold   ${classes} ${style}`} {...passProps} >
        {leftIcon && <span className={`mr-2 ${styleLeftIcon}`}>{leftIcon}</span>}

        <span className={styleContent}>{content}</span>

        {rightIcon && <span className={`ml-2 ${styleRightIcon}`}>{rightIcon}</span>}
      </button>

    // </Link>
  )
}
