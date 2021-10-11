import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authorizationTypes} from "../../types/auth";


interface initialStateTypes {
    user: any
    isLoading: boolean
    registered: boolean
    error: null | string
}

const initialState: initialStateTypes = {
    user: null,
    isLoading: false,
    registered: false,
    error: null,
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthChange(state, action) {
            state.user = action.payload
            state.isLoading = false
            state.error = null
        },
        setEmailAuth(state, action: PayloadAction<authorizationTypes>) {
            state.isLoading = true
            state.error = null
        },
        setError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
        setRegister(state, action: PayloadAction<authorizationTypes>) {
            state.isLoading = true
            state.error = null
        },
        setRegisterSuccess(state) {
            state.isLoading = false
            state.error = null
        },
        setRegisterFail(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export const {
    setAuthChange,
    setEmailAuth,
    setError,
    setRegister,
    setRegisterSuccess,
    setRegisterFail,
} = auth.actions
export default auth.reducer