import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header/Header'
import MainPage from "./pages/MainPage";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";

const Routes = ()=>{
    return( 
        <BrowserRouter>
            {/* <Header/> */}
            <Switch>
                {/* <Route exact path='/home' component={MainPage}/> */}
                <Route exact path='/cart' component={ShoppingCart} />
            </Switch>
            {/* <Footer/> */}
        </BrowserRouter>
    )
}
export default Routes