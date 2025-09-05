import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import fullStyles from './searchbar.module.css'
import embeddedStyles from './searchbar.embedded.module.css'

const SearchBar = ({ embedded = false }) => {
  const styles = embedded ? embeddedStyles : fullStyles

  const [showInput, setShowInput] = useState(false)
  const bgColor = showInput ? 'hsl(256, 43%, 7%)' : 'hsl(0, 0%, 100%)'

  const handleSearchClick = (e) => {
    e.stopPropagation()
    setShowInput(true)
  }

  const handleSectionClick = () => setShowInput(false)

  return (
    <section
      className={styles['searchbar-page']}
      style={{ backgroundColor: bgColor }}
      onClick={handleSectionClick}
    >
      { showInput
          ? (
            <input className={styles['searchbar-input']} type="text" placeholder="Search..." onClick={(e) => e.stopPropagation()}/>
          )
          : (
            <FaSearch className={styles['searchbar-icon']} onClick={handleSearchClick}/>
          )
      }
    </section>
  )
}

export default SearchBar