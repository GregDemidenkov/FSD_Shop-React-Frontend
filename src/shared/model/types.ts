import { ReactNode } from "react"

export type BaseLayoutProps = {
    header: ReactNode,
    footer: ReactNode,
    children: ReactNode
}

export type AuthCardProps = {
    title: string,
    children: ReactNode
}