import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Home} from "../../pages/Home";
import {Menu} from "../../pages/Menu";
import {SignIn} from "../../pages/SignIn";
import {SignUp} from "../../pages/SignUp";
import {Orders} from "../../pages/Orders";
import {SignOut} from "../../pages/SignOut";

export enum routes {
    home = '/',
    menu = '/menu',
    signIn = '/signin',
    signUp = '/signup',
    signOut = '/signout',
    orders = '/orders',
}

export const RootRoutes = () => {
    return (
        <Switch>
            <Route path={routes.home} exact={true} component={Home}/>
            <Route path={routes.menu} exact={true} component={Menu}/>
            <Route path={routes.signIn} exact={true} component={SignIn}/>
            <Route path={routes.signUp} exact={true} component={SignUp}/>
            <Route path={routes.orders} exact={true} component={Orders}/>
            <Route path={routes.signOut} exact={true} component={SignOut}/>
        </Switch>
    );
};