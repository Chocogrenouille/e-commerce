import styles from './product.module.scss'
import Slider from '../slider/slider'
import Modal from '../modal/modal'
import ProductInfo from '../product-info/product-info'
import { shoppingCartItemProps } from '../../../types'
import { Dispatch, SetStateAction } from 'react'
import productImages from '../../images-array'

export default function Product({
  setShoppingCart,
  shoppingCart,
  isMobile,
}: {
  shoppingCart: shoppingCartItemProps[]
  setShoppingCart: Dispatch<SetStateAction<shoppingCartItemProps[]>>
  isMobile: boolean
}) {
  return (
    <div className={styles.product}>
      {isMobile ? (
        <Modal isMobile={isMobile} images={productImages} />
      ) : (
        <Slider images={productImages} />
      )}
      <ProductInfo
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
      />
    </div>
  )
}
