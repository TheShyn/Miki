import React from 'react'

type Props = {
    Submit: any
    children: React.ReactNode
}

export default function FormField({Submit,children}: Props) {
  return (
    <form  onSubmit={Submit}>
        {children}
    </form>
  )
}