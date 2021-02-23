import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ProductsSection from './pages/ProductsSection/ProductsSection';
import AdminPanel from './pages/AdminPanel/AdminPanel';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import ShoppingCartProducts from './pages/ShoppingCart/ShoppingCartProducts/ShoppingCartProducts';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/products" component={ProductsSection} />
                <Route exact path="/admin" component={AdminPanel} />
                <Route exact path="/details/:id" component={ProductDetails} />
                <Route exact path="/shopping-cart" component={ShoppingCartProducts} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;