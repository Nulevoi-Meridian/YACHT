import './App.css';
import ProductsContextProvider from './contexts/ProductsContext';
import Routes from './Routes';

function App() {
  return (
    <ProductsContextProvider>
      <Routes />
    </ProductsContextProvider>

  );
}

export default App;
