import {call, put, takeEvery} from "redux-saga/effects";
import {authorization, registration} from "../../api/authorization";
import {authorizationTypes} from "../../types/auth";
import {setEmailAuth, setError, setRegister, setRegisterFail, setRegisterSuccess} from "./slice";
import {PayloadAction} from "@reduxjs/toolkit";

interface errorType {
    message: string
}

function* authWorker(action: PayloadAction<authorizationTypes>) {
    try {
        yield call(authorization, action.payload)
    } catch (e) {
        const error = e as errorType
        yield put(setError(error.message))
    }
}

function* registerWorker(action: PayloadAction<authorizationTypes>) {
    try {
        yield call(registration, action.payload)
        yield put(setRegisterSuccess())
    } catch (e) {
        const error = e as errorType
        yield put(setRegisterFail(error.message))
    }
}

export function* authWatcher() {
    // TODO типизировать actions

    // @ts-ignore
    yield takeEvery(setEmailAuth.type, authWorker)
    // @ts-ignore
    yield takeEvery(setRegister.type, registerWorker)
}