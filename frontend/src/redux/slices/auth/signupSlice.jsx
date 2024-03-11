import {createSlice} from '@reduxjs/toolkit'
import { registerUsers } from './authAction'

export const signupSlice = createSlice({
    name: 'signup',
    initialState: {
        isLoading: false,
        error: null,
        content: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerUsers.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(registerUsers.fulfilled, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(registerUsers.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})

export default signupSlice.reducer