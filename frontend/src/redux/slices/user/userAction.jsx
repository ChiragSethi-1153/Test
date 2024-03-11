import { createAsyncThunk } from '@reduxjs/toolkit'
import { userType } from './userType'
import fetchUserService from '../../../services/user/user.service'

export const fetchUsers = createAsyncThunk(userType, async (input, { rejectWithValue }) => {
    try {
        console.log(input)
        const response = await fetchUserService(input)
        // console.log(response)
        const data = response.data
        console.log(data)
        return data
    } catch (err) {
        console.log(err)
        return rejectWithValue(err)
    }
})