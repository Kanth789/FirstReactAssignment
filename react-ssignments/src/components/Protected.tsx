import Cookies from "js-cookie";
import React from "react";
import { OmitNative } from "react-router";
import { Redirect, RouteProps } from 'react-router-dom';

import { BrowserRouter,Route ,Switch} from 'react-router-dom';
const ProctetedRoute = (props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<Route<{}, string>> & Readonly<RouteProps<string, { [x: string]: string | undefined; }> & OmitNative<{}, keyof RouteProps<string, { [x: string]: string | undefined; }>>>) =>{
    const jwtToken = Cookies.get('jwt_token')
    
    console.log(jwtToken)
    if(jwtToken === undefined)
    {
        return <Redirect to="/login"/>
    }
    return <Route {...props}></Route>
};
export default ProctetedRoute