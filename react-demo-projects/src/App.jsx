import { BrowserRouter as Router, Routes, Route, Link, Form } from 'react-router-dom'
import styles from './app.module.css'
import Home from './components/Home/Home'
import ProjectPage from './components/ProjectPage/ProjectPage'

const App = () => {
  
  return (
    <section className={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>
      </Router>
    </section>
  )
}

export default App