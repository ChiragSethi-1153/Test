import {createSlice} from '@reduxjs/toolkit'
import { fetchBooks } from './booksAction'


export const bookSlice = createSlice({
    name: 'books',
    initialState: {
        isLoading: false,
        error: null,
        content: []
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.isLoading = false
            console.log(action.payload)
            state.content = [...action.payload]
        })
        builder.addCase(fetchBooks.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})


export default bookSlice.reducer