import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ProductsSection from './components/ProductsSection/ProductsSection';
import AdminPanel from './pages/AdminPanel/AdminPanel';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/product-section" component={ProductsSection} />
                <Route exact path="/admin" component={AdminPanel} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;