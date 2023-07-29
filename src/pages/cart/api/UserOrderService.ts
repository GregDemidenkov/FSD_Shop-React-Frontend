import protectedAxios from "@shared/api/axios"


class UserOrderService {

    userOrderUrl = '/user-order'


    getUserOrder(userId: string) {
        return protectedAxios.get(`${this.userOrderUrl}/${userId}`)
    }

    clearCart(userOrderId: string) {
        return protectedAxios.delete(`${this.userOrderUrl}/${userOrderId}`)
    }
}


export default new UserOrderService()