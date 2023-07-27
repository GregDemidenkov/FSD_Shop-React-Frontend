import { LoginDto } from "@features/LoginForm/model/types"
import { RegistartionDto } from "@features/RegistrationForm/model/types"
import protectedAxios, { axiosApi } from "@shared/api/axios"


class AuthService {

    authUrl = '/auth'


    registration(dto: RegistartionDto) {
        return axiosApi.post(`${this.authUrl}/registration`, dto)
    }

    login(dto: LoginDto) {
        return axiosApi.post(`${this.authUrl}/login`, dto)
    }

    auth() {
        return protectedAxios.get(`${this.authUrl}/check-auth`,
            {headers: {Authorization: `Bearer ${localStorage.getItem("accessToken")}`}}
        )
    }

    refreshToken() {
        return axiosApi.get(`${this.authUrl}/refresh-token/${localStorage.getItem('refreshToken')}`)
    }
}


export default new AuthService()