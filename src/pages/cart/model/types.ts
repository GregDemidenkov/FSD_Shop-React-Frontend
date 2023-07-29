import { Product } from "@entities/product/model/types"

export type EmptyCartNavigateProps = {
    isAuth: boolean
}

export type ProductOrder = {
    _id: string,
    user_order_id: string,
    product_id: Product,
    count: number,
    full_price: number
}

export type FullUserOrder = {
    _id: string,
    user_id: string,
    products: ProductOrder[],
    check: number,
    status: 'pending' | 'closed'
}