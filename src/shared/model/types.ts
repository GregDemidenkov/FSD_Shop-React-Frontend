import { ReactNode } from "react"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

import { User } from "@entities/auth/model/types"


export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type BaseLayoutProps = {
    header: ReactNode,
    footer: ReactNode,
    children: ReactNode
}

export type AuthCardProps = {
    title: string,
    children: ReactNode
}

export type AuthResponse = {
    accessToken: string,
    user: User
}

export interface MessageProps {
    type: 'info' | 'success' | 'error' | null,
    text: string | ReactNode
    
}