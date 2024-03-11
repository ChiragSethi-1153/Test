import { createAsyncThunk } from '@reduxjs/toolkit'
import { addBookType, booksType } from './booksType'
import fetchBookService from '../../../services/books/book.service'
import addBookService from '../../../services/books/addBook.service'



export const fetchBooks = createAsyncThunk(booksType, async (input, { rejectWithValue }) => {
    try {
        console.log(input)
        const response = await fetchBookService(input)
        // console.log(response)
        const data = response.data
        console.log(data)
        return data
    } catch (err) {
        console.log(err)
        return rejectWithValue(err)
    }
})


export const addBooks = createAsyncThunk(addBookType, async (input, { rejectWithValue }) => {
    try {
        console.log(input)
        

        const response = await addBookService(input)
        console.log(response)
        // const data = response.data
        // console.log(data)
        // return data
    } catch (err) {
        console.log(err)
        return rejectWithValue(err)
    }
})