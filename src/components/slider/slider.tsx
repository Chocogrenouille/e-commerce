import { useState } from 'react'
import { Modal } from '../modal/modal'
import styles from './slider.module.scss'
import productImage1 from '../../images/image-product-1.jpg'
import productImage2 from '../../images/image-product-2.jpg'
import productImage3 from '../../images/image-product-3.jpg'
import productImage4 from '../../images/image-product-4.jpg'
import productImage1Thumbnail from '../../images/image-product-1-thumbnail.jpg'
import productImage2Thumbnail from '../../images/image-product-2-thumbnail.jpg'
import productImage3Thumbnail from '../../images/image-product-3-thumbnail.jpg'
import productImage4Thumbnail from '../../images/image-product-4-thumbnail.jpg'

export default function Slider() {
  const [activeImage, setActiveImage] = useState(productImage1)
  const [showModal, setShowModal] = useState(false)
  const images = [
    {
      thumbnail: productImage1Thumbnail,
      focusImage: productImage1,
    },
    {
      thumbnail: productImage2Thumbnail,
      focusImage: productImage2,
    },
    {
      thumbnail: productImage3Thumbnail,
      focusImage: productImage3,
    },
    {
      thumbnail: productImage4Thumbnail,
      focusImage: productImage4,
    },
  ]

  return (
    <div className={styles.slider}>
      {showModal && <div className={styles.overlay}></div>}
      <figure className={styles.focusImage}>
        <img
          src={activeImage}
          alt="sneaker view profile and bottom"
          onClick={() => setShowModal(true)}
        />
      </figure>
      <div className={styles.thumbnailWrapper}>
        {images.map((image, index) => (
          <figure className={styles.thumbnailImage} key={index}>
            <img
              src={image.thumbnail}
              alt=""
              onClick={() => setActiveImage(image.focusImage)}
            />
          </figure>
        ))}
      </div>
      {showModal && <Modal setShowModal={setShowModal} images={images} />}
    </div>
  )
}
