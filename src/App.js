import "./App.css"
import AppNavbar from './components/navBar';
import Cart from './components/cart';
import { Route, Routes } from 'react-router-dom';
import Products from "./components/products";

function App() {
  return (

    <div className="App">
      <AppNavbar/>
      <Routes> 
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/' element={<Products/>}/>
      </Routes>
    </div>
  );
}

export default App;
