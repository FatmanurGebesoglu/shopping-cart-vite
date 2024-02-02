import { useState } from "react"
import Cart from "./components/Cart.jsx"
import Header from "./components/Header.jsx"
import Products from "./components/Products.jsx"

function App() {

  const [cart, setCart] = useState([]);

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <div className='container mx-auto p-4'>
      <Header cart={cart}/>
      <Products cart={cart} setCart={setCart}/>
      <Cart cart={cart} setCart={setCart} emptyCart={emptyCart}/>
    </div>
  )
}

export default App;
