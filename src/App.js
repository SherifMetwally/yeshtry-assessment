import React ,{  useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProductCards from './components/ProductCards/ProductCards';
const Product = React.lazy(() => import('./components/Product/Product.jsx'));
const Footer = React.lazy(() => import('./components/Footer/Footer.jsx'));


function App() {
  const [cartOpen,setCartOpen] = useState(false)
  const [carItems, setCartItems] = useState([])

  function addToCart(newElement) {
    // empty cart items
    if (carItems.length === 0) return setCartItems( [newElement]);

    // carts 
    setCartItems(carItems.map((cart) => {
      if (newElement.id === cart.id) {
        return {
          ...cart, 
          quantity: cart.quantity + newElement.quantity
        }
      } else {
        return newElement
      }
    }))
    }

    function removeItem(newElement) {
      setCartItems(carItems.filter((cart) => {
        return newElement.id !== cart.id
      }))
    }

    function toggleCart() {
      setCartOpen(preValue => !preValue)
    }
    
  

  // addToCard={() => addToCart()}

  return (
    <div className="App">
      <Cart removeItem = {removeItem}    cartOpen={cartOpen} products={carItems} toggleCart={toggleCart} />
      <Navbar/>
      <Header items = {carItems} toggleCart={toggleCart} />
      <Categories/>
      <Product addToCart={addToCart}   />
      <ProductCards/>
      <Footer/>
    </div>
  );
}

export default App;
