import React, {FC, Suspense, useEffect} from 'react';
import firebase from "./firebase";
import {Layout} from "antd";
import {PageHeader} from "./components/PageHeader";
import {RootRoutes} from "./components/RootRoutes";
import {PageFooter} from "./components/PageFooter";
import {useActions} from "./hooks/useActions";


export const App: FC = () => {
    const {setAuthChange} = useActions()

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setAuthChange(user)
        })
    }, [setAuthChange])

    return (
        <>
            <Suspense fallback={<h1>Loading ...</h1>}>
                <Layout>
                    <PageHeader/>
                    <RootRoutes/>
                    <PageFooter/>
                </Layout>
            </Suspense>
        </>
    );
};