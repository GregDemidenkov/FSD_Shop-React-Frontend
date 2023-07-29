import protectedAxios from "@shared/api/axios"


class UserOrderService {

    userOrderUrl = '/user-order'


    getUserOrder(userId: string) {
        return protectedAxios.get(`${this.userOrderUrl}/${userId}`)
    }
}


export default new UserOrderService()