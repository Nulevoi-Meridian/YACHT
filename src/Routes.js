import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header'
// import AboutUs from "./pages/AboutUs/AboutUs";
import MainPage from "./pages/MainPage/MainPage";
import ProductsSection from './pages/ProductsSection/ProductsSection';
import AdminPanel from './pages/AdminPanel/AdminPanel';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import ShoppingCartProducts from './pages/ShoppingCart/ShoppingCartProducts/ShoppingCartProducts';

const Routes = ()=>{
    return( 
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path='/' component={MainPage}/>
                {/* <Route exact path='/about' component={AboutUs}/> */}
                <Route exact path="/products" component={ProductsSection} />
                <Route exact path="/admin" component={AdminPanel} />
                <Route exact path="/details/:id" component={ProductDetails} />
                <Route exact path="/shopping-cart" component={ShoppingCartProducts} />
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}
export default Routes;