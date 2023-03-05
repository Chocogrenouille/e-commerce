import { useState } from 'react'
import Navigation from './components/navigation/navigation'
import Product from './components/product/product'
import ShoppingCart from './components/shopping-cart/shopping-cart'

export default function App() {
  const [shoppingCart, setShoppingCart] = useState([])
  const [showShoppingCart, setShowShoppingCart] = useState(false)

  return (
    <div>
      <Navigation setShowShoppingCart={setShowShoppingCart} />
      {showShoppingCart && (
        <ShoppingCart
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
        />
      )}
      <Product shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
    </div>
  )
}
