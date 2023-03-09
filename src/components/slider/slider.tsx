import { useState } from 'react'
import Modal from '../modal/modal'
import styles from './slider.module.scss'

export default function Slider({
  images,
}: {
  images: { thumbnail: any; focusImage: any }[]
}) {
  const [activeImage, setActiveImage] = useState(images[0].focusImage)
  const [showModal, setShowModal] = useState(false)

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
      {showModal && (
        <Modal isMobile={false} setShowModal={setShowModal} images={images} />
      )}
    </div>
  )
}
