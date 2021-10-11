import React from 'react';
import {Redirect} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import firebase from "../../firebase";

export const SignOut = () => {
    const {user} = useTypedSelector(state => state.auth)

    if(user) {
        firebase.auth().signOut()
    }

    return <Redirect to="/" />
};