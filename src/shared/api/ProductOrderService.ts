import protectedAxios from "@shared/api/axios"

import { AddProductOrderDto } from "@features/AddToCart/model/types"
import { ChangeCountProductOrderDto } from "@features/ChangeCountProductOrder/model/types"


class ProductOrderService {

    productOrderUrl = '/product-order'


    addProductOrder(dto: AddProductOrderDto) {
        return protectedAxios.post(`${this.productOrderUrl}/create`, dto)
    }

    deleteFromCart(productOrderId: string) {
        return protectedAxios.delete(`${this.productOrderUrl}/${productOrderId}`)
    }

    changeCountProductOrder(dto: ChangeCountProductOrderDto) {
        return protectedAxios.patch(`${this.productOrderUrl}/update-count`, {
            userOrderId: dto.userOrderId,
            productOrderId: dto.productOrderId,
            count: dto.count,
            action: dto.action
        })
    }
}


export default new ProductOrderService()