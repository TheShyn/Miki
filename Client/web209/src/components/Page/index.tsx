import React, { Children, useEffect } from 'react'

type Props = {
    children: React.ReactNode,
    title: string
}
export default function Page({children,title}:Props) {
    useEffect(() => {
        document.title = title + ' | Miki Jewelry';
      }, []);
  return (
    <div>{children}</div>
  )
}
