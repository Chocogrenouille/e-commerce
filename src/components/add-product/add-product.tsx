import { useState } from 'react'
import styles from './add-product.module.scss'
import productImage1Thumbnail from '../../images/image-product-1-thumbnail.jpg'
import { shoppingCartItemProps } from '../../../types'

export default function AddProduct({
  setShoppingCart,
  shoppingCart,
}: {
  shoppingCart: shoppingCartItemProps[]
  setShoppingCart: (item: shoppingCartItemProps[]) => void
}) {
  const [quantity, setQuantity] = useState(0)

  const addToCart = (
    productName: string,
    quantity: number,
    productImage: string
  ) => {
    if (shoppingCart.length === 0) {
      setShoppingCart([
        {
          image: productImage,
          name: productName,
          quantity: quantity,
          price: 125,
        },
      ])
    } else {
      setShoppingCart(
        shoppingCart.map((item: shoppingCartItemProps) => {
          if (item.name === productName) {
            return { ...item, quantity }
          } else {
            return item
          }
        })
      )
    }
    setQuantity(0)
    return
  }

  const changeQuantity = (action: 'remove' | 'add') => {
    if (quantity === 0 && action === 'remove') {
      return
    } else if (action === 'add') {
      setQuantity((prevState) => prevState + 1)
    } else if (action === 'remove') {
      setQuantity((prevState) => prevState - 1)
    }
  }

  return (
    <div className={styles.addProduct}>
      <div className={styles.selectProductQuantity}>
        <button onClick={() => changeQuantity('remove')}>-</button>
        <span>{quantity}</span>
        <button onClick={() => changeQuantity('add')}>+</button>
      </div>
      <div className={styles.addButtonShoppingCart}>
        <button
          onClick={() =>
            addToCart(
              'Fall Limited Edition Sneakers',
              quantity,
              productImage1Thumbnail
            )
          }
        >
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#ffffff"
              fillRule="nonzero"
            />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  )
}
