import {combineReducers} from "@reduxjs/toolkit";
import {all} from "redux-saga/effects";
import {auth, authActions, authWatcher} from "./auth";

export const allActionCreators = {
    ...authActions
}

export const rootReducer = combineReducers({auth})
export type RootState = ReturnType<typeof rootReducer>

export function* rootWatcher() {
    yield all([
        authWatcher()
    ])
}