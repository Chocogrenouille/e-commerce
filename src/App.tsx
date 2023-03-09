import { useState, useEffect } from 'react'
import { shoppingCartItemProps } from '../types'
import Navigation from './components/navigation/navigation'
import Product from './components/product/product'
import ShoppingCart from './components/shopping-cart/shopping-cart'

export default function App() {
  const [shoppingCart, setShoppingCart] = useState<shoppingCartItemProps[]>([])
  const [showShoppingCart, setShowShoppingCart] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 450px)').matches)
  }, [])

  return (
    <div>
      <Navigation
        shoppingCart={shoppingCart}
        setShowShoppingCart={setShowShoppingCart}
        isMobile={isMobile}
      />
      {showShoppingCart && (
        <ShoppingCart
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
        />
      )}
      <Product
        isMobile={isMobile}
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
      />
    </div>
  )
}
