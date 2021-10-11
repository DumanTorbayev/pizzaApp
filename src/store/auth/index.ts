import {
    setAuthChange,
    setEmailAuth,
    setError,
    setRegister,
    setRegisterFail,
    setRegisterSuccess,
} from "./slice";

export {default as auth} from './slice'
export const authActions = {
    setAuthChange,
    setEmailAuth,
    setError,
    setRegister,
    setRegisterSuccess,
    setRegisterFail,
}
export * from './saga'