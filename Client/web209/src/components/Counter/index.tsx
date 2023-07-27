import React, { createContext, useReducer } from 'react'

type Props = {
    children: React.ReactNode
}
export const CouterContext = createContext({} as any)

const initValue = {
    value: 0
}

const reducerFuntion = (state: any, action: any): any => {
    switch (action.type) {
        case "UP":
            return{value: state.value + 1}
        default:
            return state
    }
}
export default function CouterProvider({ children }: Props) {
    const [state, dispatch] = useReducer(reducerFuntion, initValue)
    return (
        <CouterContext.Provider value ={{state, dispatch}}>{children}</CouterContext.Provider>
    )
}