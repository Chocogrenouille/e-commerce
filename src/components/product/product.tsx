import styles from './product.module.scss'
import Slider from '../slider/slider'
import ProductInfo from '../product-info/product-info'

export default function Product({ setShoppingCart, shoppingCart }: any) {
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
