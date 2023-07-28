import { axiosApi } from "@shared/api/axios";


class ProductService {

    getProducts(sort: string) {
        return axiosApi.get(`/products/all/${sort}`)
    }
}


export default new ProductService()