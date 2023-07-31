import { ReactNode } from "react"

import { ProductOrder } from "@entities/cart"


export type CartTableProps = {
    productOrders: ProductOrder[]
}

export type TableData = {
    key: string,
    product: ReactNode,
    price: string,
    count: ReactNode,
    action: ReactNode
}