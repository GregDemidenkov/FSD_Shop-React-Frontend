import { createAsyncThunk } from "@reduxjs/toolkit"

import { RegistartionDto } from "./types"
import AuthService from "@entities/auth/api/AuthService"


export const registration = createAsyncThunk(
    "auth/registration", 
    async (dto: RegistartionDto , thunkAPI) => {
        try {
            const response: any = await AuthService.registration(dto)

            return response.data
        } catch (error: any) {
            return thunkAPI.rejectWithValue("Error");
        }
    }
)