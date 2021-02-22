import 'react-credit-cards/es/styles-compiled.css';
import './App.css';
import ProductsContextProvider from './contexts/ProductsContext';
import Routes from './Routes';
import 'react-credit-cards/es/styles-compiled.css';

function App() {
  return (
    <ProductsContextProvider>
      <Routes />
    </ProductsContextProvider>

  );
}

export default App;
