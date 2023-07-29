export type ChangeCountProductOrderProps = {
    maxCount: number,
    count: number,
    productOrderId: string,
    userOrderId: string,
    userId: string
}

export type ChangeCountProductOrderDto = {
    userId: string,
    userOrderId: string,
    productOrderId: string,
    count: number,
    action: "delete" | "add"
}