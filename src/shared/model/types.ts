import { ReactNode } from "react"

import { User } from "@entities/auth/model/types"


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