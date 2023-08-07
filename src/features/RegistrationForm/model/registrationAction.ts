import { createAsyncThunk } from "@reduxjs/toolkit"

import { RegistrationDto } from "./types"
import AuthService from "@entities/auth/api/AuthService"


export const registration = createAsyncThunk(
    "auth/registration", 
    async (dto: RegistrationDto , thunkAPI) => {
        try {
            const response: any = await AuthService.registration(dto)

            return response.data
        } catch (error: any) {
            return thunkAPI.rejectWithValue("Error");
        }
    }
)