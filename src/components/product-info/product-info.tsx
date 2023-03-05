import AddProduct from '../add-product/add-product'
import styles from './product-info.module.scss'

export default function ProductInfo({ setShoppingCart, shoppingCart }: any) {
  return (
    <section className={styles.productInfo}>
      <aside>SNEAKER COMPANY</aside>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className={styles.productPrice}>
        <span className={styles.newPrice}>$125.00</span>
        <span className={styles.discount}>50%</span>
        <span className={styles.oldPrice}>$250.00</span>
      </div>
      <AddProduct
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
      />
    </section>
  )
}
