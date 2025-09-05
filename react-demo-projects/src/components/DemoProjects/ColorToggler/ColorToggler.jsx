import { useState } from "react"
import fullStyles from './colortoggler.module.css'
import embeddedStyles from './colortoggler.embedded.module.css'

const palettes = [
  { background: '#fef6e4', text: '#001858', buttonBackground: '#f582ae', buttonText: '#fff' },
  { background: '#e3f2fd', text: '#0d47a1', buttonBackground: '#1976d2', buttonText: '#fff' },
  { background: '#f0f4f8', text: '#102a43', buttonBackground: '#d64550', buttonText: '#fff' },
  { background: '#fff0f6', text: '#5f0f40', buttonBackground: '#9a031e', buttonText: '#fff' },
  { background: '#ecf39e', text: '#132a13', buttonBackground: '#31572c', buttonText: '#fff' },
]

const getRandomTheme = () => {
  return palettes[Math.floor(Math.random() * palettes.length)]
}

const ColorToggler = ({ embedded = false }) => {
  const styles = embedded ? embeddedStyles : fullStyles
  const [theme, setTheme] = useState(getRandomTheme)

  return (
    <div
      className={styles['color-toggler']}
      style={{
        backgroundColor: theme.background,
        color: theme.text
      }}
    >
      <h1 className={styles.title}>Dynamic Color Theme</h1>
      <button
        className={styles.button}
        style={{
          backgroundColor: theme.buttonBackground,
          color: theme.buttonText
        }} 
        onClick={() => setTheme(getRandomTheme())}
      >
        Change Colors
      </button>
    </div>
  )
}

export default ColorToggler