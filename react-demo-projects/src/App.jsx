import { BrowserRouter as Router, Routes, Route, Link, Form } from 'react-router-dom'
import styles from './app.module.css'
import Home from './components/Home/Home'
import Counter from './components/DemoProjects/Counter/Counter'
import Navigation from './components/Navbar/Navigation'
import Todo from './components/DemoProjects/Todo/Todo'
import Meals from './components/DemoProjects/MealsAPI/Meals'
import Calculator from './components/DemoProjects/Calculator/Calculator'
import ColorToggler from './components/DemoProjects/ColorToggler/ColorToggler'
import SearchIcon from './components/DemoProjects/SearchIcon/SearchIcon'
import Testimonials from './components/DemoProjects/Testimonials/Testimonials'
import Accordion from './components/DemoProjects/Accordions/Accordion'
import FormV from './components/DemoProjects/FormValidation/FormV'
import AdvancedApp from './components/DemoProjects/AdvancedFilteringECommerce/AdvancedApp'

const App = () => {
  
  return (
    <section className={styles.app}>
      <Router>
        <header>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />}/>  
            <Route path='/counter' element={<Counter />}/>
            <Route path='/todo' element={<Todo />}/>
            <Route path='/meals' element={<Meals />}/>
            <Route path='/calculator' element={<Calculator />}/>
            <Route path='/color-toggle' element={<ColorToggler />}/>
            <Route path='/search-icon' element={<SearchIcon />}/>
            <Route path='/testimonials' element={<Testimonials />}/>
            <Route path='/accordions' element={<Accordion />}/>
            <Route path='/form-validation' element={<FormV />}/>
            <Route path='/advanced-filtering-e-commerce' element={<AdvancedApp />}/>
          </Routes>
        </main>
        <footer>

        </footer>
      </Router>
    </section>
  )
}

export default App