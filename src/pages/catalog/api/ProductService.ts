import { axiosApi } from "@shared/api/axios";


class ProductService {

    getProducts() {
        return axiosApi.get('/products/all')
    }
}


export default new ProductService()