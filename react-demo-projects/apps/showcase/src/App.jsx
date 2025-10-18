import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes/index'
import styles from './app.module.css'

const App = () => (
  <section className={styles.app}>
    <Router>
      <AppRoutes />
    </Router>
  </section>
)

export default App
