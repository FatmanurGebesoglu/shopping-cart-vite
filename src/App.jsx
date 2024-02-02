import Cart from "./components/Cart.jsx"
import Header from "./components/Header.jsx"
import Products from "./components/Products.jsx"

function App() {

  return (
    <div className='container mx-auto p-4'>
      <Header />
      <Products />
      <Cart />
    </div>
  )
}

export default App
