import { NavLink } from "react-router-dom"
import styles from './navigation.module.css'

const Navigation = ({ title, prevProjectId, nextProjectId }) => {
 
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.navigation}>
          <ul className={styles.buttons}>
            <NavLink to={`/projects/${prevProjectId}`} className={styles['nav-link']}>
              <li className={styles.item}>Prev</li>
            </NavLink>
            <NavLink to="/" className={styles['nav-link']}>
              <li className={`${styles.item} ${styles.homeItem}`}>Home</li>
            </NavLink>
            <NavLink to={`/projects/${nextProjectId}`} className={styles['nav-link']}>
              <li className={styles.item}>Next</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation