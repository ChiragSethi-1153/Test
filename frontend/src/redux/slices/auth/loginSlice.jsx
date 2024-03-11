import {createSlice} from '@reduxjs/toolkit'
import { loginUsers } from './authAction'

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLoading: false,
        error: null,
        content: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUsers.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(loginUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = action.payload
        })
        builder.addCase(loginUsers.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})

export default loginSlice.reducer