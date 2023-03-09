import { useState, useEffect } from 'react'
import styles from './navigation.module.scss'
import { SetStateAction, Dispatch } from 'react'
import MobileNavigation from './mobile-navigation'
import DesktopNavigation from './desktop-navigation'
import { shoppingCartItemProps } from '../../../types'

function Navigation({
  setShowShoppingCart,
  shoppingCart,
  isMobile,
}: {
  setShowShoppingCart: Dispatch<SetStateAction<boolean>>
  shoppingCart: shoppingCartItemProps[]
  isMobile: boolean
}) {
  const [itemQuantity, setItemQuantity] = useState(0)

  useEffect(() => {
    setItemQuantity(
      shoppingCart.reduce(
        (acc, currentValue: shoppingCartItemProps) =>
          acc + currentValue.quantity,
        0
      )
    )
  }, [shoppingCart])

  return (
    <nav className={styles.navigation}>
      {isMobile ? (
        <MobileNavigation
          itemQuantity={itemQuantity}
          setShowShoppingCart={setShowShoppingCart}
        />
      ) : (
        <DesktopNavigation
          itemQuantity={itemQuantity}
          setShowShoppingCart={setShowShoppingCart}
        />
      )}
    </nav>
  )
}

export default Navigation
