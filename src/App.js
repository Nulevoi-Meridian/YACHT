import './App.css';
import ProductsContextProvider from './contexts/ProductsContext';
import Routes from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCartContextProvider from './contexts/ShoppingCartContext';

function App() {
  return (
    <ProductsContextProvider>
      <ShoppingCartContextProvider>
        <Routes />
      </ShoppingCartContextProvider>
    </ProductsContextProvider>

  );
}

export default App;
