import axios from 'axios'
import Masonry from 'react-masonry-css'
import { useState, useEffect } from 'react'
import styles from './mealsapi.module.css'


const Meals = () => {
  const [items, setItems] = useState([])

  const breakpoints = {
    default: 5,
    1200: 4,
    950: 3,
    700: 2,
    480: 1
  }

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken')
        setItems(response.data.meals)
      } catch (exception) {
        console.error(`Error: ${exception.response?.data?.error || exception.message}`)
      }
    } 

    fetchItems()
  }, [])

  const itemsList = items.map(item => {
    return (
      <section key={item.idMeal} className={styles.card}>
        <img src={item.strMealThumb} alt={item.strMeal} className={styles['card-image']}/>
        <section className={styles['card-content']}>
          <p className={styles.meal}>{item.strMeal}</p>
          <p className={styles['meal-id']}>#{item.idMeal}</p>
        </section>
      </section>
    )
  })

  return (
    <div className={styles.meals}>
      <div className={styles['items-container']}>
        <Masonry
          breakpointCols={breakpoints}
          className={styles.masonryGrid}
          columnClassName={styles.masonryColumn}
        >
        {itemsList}
        </Masonry>
      </div>
    </div>
  )
}

export default Meals