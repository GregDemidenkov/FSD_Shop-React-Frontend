import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { Message, User } from "./types"

import { LoginResponse } from "@features/LoginForm/model/types"
import { login } from "@features/LoginForm/model/loginAction"
import { registration } from "@features/RegistrationForm/model/registrationAction"
import { auth } from "@shared/api/authAction"
import { AuthResponse } from "@shared/model/types"


interface AuthState {
    user: User,
    isAuth: boolean,
    isLoading: boolean
    message: Message
}

const initialState: AuthState = {
    user: {} as User,
    isAuth: false,
    isLoading: false,
    message: {
        type: null,
        text: ""
    }
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout(state) {
            localStorage.removeItem('accessToken')
            state.isAuth = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registration.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(registration.fulfilled, (state) => {
            state.isLoading = false
            state.message.type = 'success'
            state.message.text = 'Регистрация прошла успешно'
        })
        builder.addCase(registration.rejected, (state) => {
            state.isLoading = false
            state.message.type = 'error'
            state.message.text = 'Произошла ошибка, попробуйте снова'
        })
        
        builder.addCase(login.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(login.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
            state.isLoading = false
            state.user = action.payload.user
            localStorage.setItem('accessToken', action.payload.accessToken)
            localStorage.setItem('refreshToken', action.payload.refreshToken)
            state.isAuth = true
            state.message.type = null
            state.message.text = ''
        })
        builder.addCase(login.rejected, (state) => {
            state.isLoading = false
            state.message.type = 'error'
            state.message.text = 'Неправильная почта или пароль'
        })

        builder.addCase(auth.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(auth.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
            state.isLoading = false
            state.user = action.payload.user
            localStorage.setItem('accessToken', action.payload.accessToken)
            state.isAuth = true
        })
        builder.addCase(auth.rejected, (state) => {
            state.isLoading = false
        })
    },
})


export const { logout } = authSlice.actions

export default authSlice.reducer