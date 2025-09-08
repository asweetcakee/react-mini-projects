import { useState } from 'react'
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md"
import fullStyles from './testimonials.module.css'
import embeddedStyles from './testimonials.embedded.module.css'
import { facts, categoryColors } from './facts'

const Testimonials = ({ embedded = false }) => {
  const styles = embedded ? embeddedStyles : fullStyles
  const [currentIndex, setCurrentIndex] = useState(0)
  const handlePrevClick = () => setCurrentIndex((currentIndex + facts.length - 1) % facts.length)
  const handleNextClick = () => setCurrentIndex((currentIndex + 1) % facts.length)

  return (
    <div className={styles['testimonials-page']}>
      <div className={styles['testimonials-main']}>
        <button
          onClick={handlePrevClick}
          className={styles['testimonials-btn-left']
          }
        >
          <MdNavigateBefore />
        </button>
        <div className={styles['testimonials-facts']}>
          <div className={styles['testimonials-top']}>
            <span
              style={{ color: categoryColors[facts[currentIndex].category] }}
              className={styles['testimonials-category']}
            >
              #{ facts[currentIndex].category }
            </span>
          </div>
          <div className={styles['testimonials-quote']}>
            { facts[currentIndex].fact }
          </div>
          <div className={styles['testimonials-bottom']}>
            <span className={styles['testimonials-source']}>{ facts[currentIndex].source }</span>
          </div>
        </div>
        <button
          onClick={handleNextClick}
          className={styles['testimonials-btn-right']
          }
        >
          <MdNavigateNext />
        </button>
      </div>
    </div>
  )
}

export default Testimonials