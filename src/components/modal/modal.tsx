import { useState } from 'react'
import styles from './modal.module.scss'

export function Modal(props: {
  setShowModal: (show: boolean) => void
  images: { thumbnail: string; focusImage: string }[]
}) {
  const { setShowModal, images } = props
  const [activeImage, setActiveImage] = useState<number>(0)

  const handleClick = (direction: 'next' | 'previous') => {
    if (direction === 'next' && activeImage < images.length - 1) {
      setActiveImage((prevState) => prevState + 1)
    } else if (direction === 'previous' && activeImage > 0) {
      setActiveImage((prevState) => prevState - 1)
    }
  }

  return (
    <div className={styles.modal}>
      <svg
        className={styles.closeButton}
        width="14"
        height="15"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => setShowModal(false)}
      >
        <path
          d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
          fill="#ffffff"
          fillRule="evenodd"
        />
      </svg>
      <div className={styles.focusImage}>
        <div
          className={`${styles.prevArrow} ${styles.arrow}`}
          onClick={() => handleClick('previous')}
        >
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <figure>
          <img
            src={images[activeImage].focusImage}
            alt="sneaker view profile and bottom"
          />
        </figure>
        <div
          className={`${styles.nextArrow} ${styles.arrow}`}
          onClick={() => handleClick('next')}
        >
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className={styles.thumbnailWrapper}>
        {images.map((image, index) => (
          <figure className={styles.thumbnailImage} key={index}>
            <img
              src={image.thumbnail}
              alt=""
              onClick={() => setActiveImage(index)}
            />
          </figure>
        ))}
      </div>
    </div>
  )
}
