import styles from './product.module.scss'
import Slider from '../slider/slider'
import ProductInfo from '../product-info/product-info'
import { shoppingCartItemProps } from '../../../types'
import { Dispatch, SetStateAction } from 'react'

export default function Product({
  setShoppingCart,
  shoppingCart,
}: {
  shoppingCart: shoppingCartItemProps[]
  setShoppingCart: Dispatch<SetStateAction<shoppingCartItemProps[]>>
}) {
  return (
    <div className={styles.product}>
      <Slider />
      <ProductInfo
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
      />
    </div>
  )
}
