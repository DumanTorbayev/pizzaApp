import {call, put, takeEvery} from "redux-saga/effects";
import { errorType } from "../../types/errors";

function* menuWorker() {
    try {

    } catch (e) {
        const error = e as errorType
    }
}

export function*  menuWatcher() {
    // @ts-ignore
    yield takeEvery('', menuWorker())
}