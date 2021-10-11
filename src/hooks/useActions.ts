import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {allActionCreators} from "../store";

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActionCreators, dispatch)
}