import { NavLink } from "react-router-dom"
import styles from './navigation.module.css'

const Navigation = () => {
  const getActiveClass = ({ isActive }) => 
    isActive 
      ? `${styles.link} ${styles.linkActive}` 
      : styles.link

  return (
    <nav className={styles.navbar}>
      <NavLink to='/' className={getActiveClass}>Home</NavLink>
      <NavLink to='/counter' className={getActiveClass}>Counter</NavLink>
      <NavLink to='/todo' className={getActiveClass}>Todo</NavLink>
      <NavLink to='/meals' className={getActiveClass}>Meals API</NavLink>
      <NavLink to='/calculator' className={getActiveClass}>Calculator</NavLink>
      <NavLink to='/color-toggle' className={getActiveClass}>Color Toggler</NavLink>
      <NavLink to='/search-icon' className={getActiveClass}>Search Icon</NavLink>
      <NavLink to='/testimonials' className={getActiveClass}>Testimonials</NavLink>
      <NavLink to='/accordions' className={getActiveClass}>Accordion</NavLink>
      <NavLink to='/form-validation' className={getActiveClass}>Form Validation</NavLink>
      <NavLink to='/advanced-filtering-e-commerce' className={getActiveClass}>E Commerce</NavLink>
    </nav>
  )
}

export default Navigation