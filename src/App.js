import 'react-credit-cards/es/styles-compiled.css';
import './App.css';
<<<<<<< HEAD
import ProductsContextProvider from './contexts/ProductsContext';
import Routes from './Routes';

function App() {
  return (
    <ProductsContextProvider>
      <Routes />
    </ProductsContextProvider>

=======
import CreditCard from "./components/Header/Card/CreditCart"



function App() {
  return (
    <div className="App">
      <CreditCard/>
    </div>
>>>>>>> aac0b5aac5fab447f6278a2d0e577c7c4db86772
  );
}

export default App;
