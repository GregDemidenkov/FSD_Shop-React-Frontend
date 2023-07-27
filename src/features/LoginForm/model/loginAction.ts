import { createAsyncThunk } from "@reduxjs/toolkit"

import { LoginDto, LoginResponse } from "./types"
import AuthService from "@entities/auth/api/AuthService"


export const login = createAsyncThunk<LoginResponse, LoginDto>(
    "auth/login", 
    async (dto, thunkAPI) => {
        try {
            const response: any = await AuthService.login(dto)

            return response.data
        } catch (error: any) {
            return thunkAPI.rejectWithValue("Error");
        }
    }
)