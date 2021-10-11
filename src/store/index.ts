import {combineReducers} from "@reduxjs/toolkit";
import {all} from "redux-saga/effects";
import {auth, authActions, authWatcher} from "./auth";
import {menu, menuActions, menuWatcher} from "./menu";

export const allActionCreators = {
    ...authActions,
    ...menuActions
}

export const rootReducer = combineReducers({
    auth,
    menu,
})
export type RootState = ReturnType<typeof rootReducer>

export function* rootWatcher() {
    yield all([
        authWatcher(),
        menuWatcher(),
    ])
}