import { AddProductOrderDto } from "@features/AddToCart/model/types"
import protectedAxios from "@shared/api/axios"

class ProductOrderService {

    productOrderUrl = '/product-order'


    addProductOrder(dto: AddProductOrderDto) {
        return protectedAxios.post(`${this.productOrderUrl}/create`, dto)
    }
}


export default new ProductOrderService()