import { shoppingCartItemProps } from '../../../types/'
import { Dispatch, SetStateAction } from 'react'
import styles from './shopping-cart.module.scss'

export default function ShoppingCart({
  shoppingCart,
  setShoppingCart,
}: {
  shoppingCart: shoppingCartItemProps[]
  setShoppingCart: Dispatch<SetStateAction<shoppingCartItemProps[]>>
}) {
  const deleteItem = (name: string) => {
    setShoppingCart(
      shoppingCart.filter((item: shoppingCartItemProps) => item.name !== name)
    )
  }

  return (
    <div className={styles.shoppingCartWrapper}>
      <h5>Cart</h5>
      {shoppingCart.length > 0 ? (
        <div className={styles.shoppingCart}>
          {shoppingCart.map((item) => (
            <div key={item.name} className={styles.shoppingCartItem}>
              <figure>
                <img src={item.image} alt="sneaker thumbnail" />
              </figure>
              <p className={styles.productName}>{item.name}</p>
              <p className={styles.productPrice}>
                ${item.price} x {item.quantity}{' '}
                <b style={{ color: '#000000' }}>
                  ${item.price * item.quantity}
                </b>
              </p>
              <button onClick={() => deleteItem(item.name)}>
                <svg
                  width="14"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path
                      d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                      id="a"
                    />
                  </defs>
                  <use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" />
                </svg>
              </button>
            </div>
          ))}
          <button className={styles.checkoutButton}>Checkout</button>
        </div>
      ) : (
        <p className={styles.emptyCart}>Your shopping cart is empty.</p>
      )}
    </div>
  )
}
