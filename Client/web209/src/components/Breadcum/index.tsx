import React from 'react'
import { Link } from 'react-router-dom'
import {MdArrowForwardIos} from 'react-icons/md'
type Breadcum = {
    params: {label:string, href:string}[],
    className?:string
}
export default function Breadcum({ params = [], className }:Breadcum) {
    const length = params?.length
  return (
    <div className={`mb-[32px] flex ${className}`}>
            {
                params.map((e, i) => (
                    <div
                        key={e.href}
                        className='flex items-center '>
                        <Link
                            to={e.href}
                        >
                            <a
                                className={`text-[#626262] mr-2 ${i == length -1 && 'font-bold'}}`}
                            >
                                {e.label}
                            </a>
                        </Link>
                        
                        {
                            i < length - 1 &&
                            <span className='mr-2'><MdArrowForwardIos /></span>
                        }
                    </div>
                ))
            }
        </div>
  )
}
