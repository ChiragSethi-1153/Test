import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginType, signupType } from './authType'
import signupService from '../../../services/auth/signup.service'
import loginService from '../../../services/auth/login.service'

export const registerUsers = createAsyncThunk(signupType, async (inputs, { rejectWithValue }) => {
    try {
        const response = await signupService(inputs)
        // console.log(response)
        const data = response.data
        console.log(data)
        return data
    } catch (err) {
        console.log(err)
        return rejectWithValue(err)
    }
})


export const loginUsers = createAsyncThunk(loginType, async (inputs, {rejectWithValue}) => {
    try{
        console.log(inputs)
        const response = await loginService(inputs)
        // console.log(response)
        const data = await response.data
        console.log(data)
        return data
    }catch(err) {
        console.log(err)
        return rejectWithValue(err)
    }
})