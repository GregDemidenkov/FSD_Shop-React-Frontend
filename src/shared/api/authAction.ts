import { createAsyncThunk } from "@reduxjs/toolkit"

import AuthService from "@entities/auth/api/AuthService"
import { AuthResponse } from "@shared/model/types"



export const auth = createAsyncThunk<AuthResponse>(
    "auth/auth", 
    async (_, thunkAPI) => {
        try {
            const response: any = await AuthService.auth()

            return response.data
        } catch (error: any) {
            return thunkAPI.rejectWithValue("Error");
        }
    }
)