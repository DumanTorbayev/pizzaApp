import axios from "axios";
import {firebaseConfig} from "../firebase/config";

export const api = axios.create({
    baseURL: `${firebaseConfig.databaseURL}`,
});