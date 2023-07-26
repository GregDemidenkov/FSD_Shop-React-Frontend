import { ReactNode } from "react"


export type Product = {
    id: string,
    name: string,
    img: string,
    country: string
    carats: number,
    price: number,
    count: number
}

export type ProductCardProps = {
    product: Product,
    children: ReactNode
}

export type ProductTitleProps = {
    name: string
}

export type ProductInfoProps = {
    info: {
        country: string,
        carats: number,
        price: number
    }
}