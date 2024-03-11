import { combineReducers } from "@reduxjs/toolkit"
import loginSlice from "../slices/auth/loginSlice"
import signupSlice from "../slices/auth/signupSlice"
import bookSlice from "../slices/books/bookSlice"

const rootReducer = combineReducers({
    login: loginSlice,
    signup: signupSlice,
    books: bookSlice,
})

export default rootReducer