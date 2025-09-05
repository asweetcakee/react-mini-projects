import Counter from './components/DemoProjects/Counter/Counter'
import Todo from './components/DemoProjects/Todo/Todo'
import Meals from './components/DemoProjects/MealsAPI/Meals'
import Calculator from './components/DemoProjects/Calculator/Calculator'
import ColorToggler from './components/DemoProjects/ColorToggler/ColorToggler'
import SearchBar from './components/DemoProjects/Search Bar/SearchBar'

export const projectTypes = {
  small: 'small',
  medium: 'medium',
  large: 'large'
}

export const projects = [
  {
    id: 'counter',
    title: 'Counter',
    description: 'A simple counter app with increment, decrement, reset and timer functionality.',
    features: ['useState', 'useRef', 'event handling', 'setInterval', 'clearInterval'],
    type: projectTypes.small,
    component: Counter,
  },
  {
    id: 'todo',
    title: 'Todo',
    description: 'A simple todo app that allows users to add and remove items from a list.',
    features: ['useState', 'event handling', 'concat', 'filter', 'input field'],
    type: projectTypes.small,
    component: Todo,
  },
  {
    id: 'meals-api',
    title: 'Meals API',
    description: 'An app that fetches and displays meals from a public API, with a responsive grid layout.',
    features: ['useState', 'useEffect', 'axios', 'async/await', 'API integration', 'React Masonry'],
    type: projectTypes.large,
    component: Meals,
  },
  {
    id: 'calculator',
    title: 'Calculator',
    description: 'A calculator app that supports basic arithmetic operations, tokenization of expressions, and evaluation using Reverse Polish Notation (RPN).',
    features: [
      'useState',
      'event handling',
      'string manipulation',
      'tokenization',
      'Reverse Polish Notation (RPN)',
      'stack-based evaluation'
    ],
    type: projectTypes.medium,
    component: Calculator,
  },
  {
    id: 'color-toggler',
    title: 'Color Toggler',
    description: 'An interactive app that dynamically changes background, text, and button colors using pre-defined palettes.',
    features: [
      'useState',
      'event handling',
      'dynamic styling',
      'random palette selection',
      'theme toggling'
    ],
    type: projectTypes.small,
    component: ColorToggler,
  },
  {
    id: 'search-bar',
    title: 'Search bar',
    description: 'A search bar component with toggleable input field and background color change on focus.',
    features: ['useState', 'event handling', 'conditional rendering','event propagation control', 'react-icons'],
    type: projectTypes.small,
    component: SearchBar,
  },
  {
    id: 'testimonials',
    title: 'Counter',
    description: 'A simple counter app with increment/decrement/reset and timer functionality.',
    features: ['useState', 'event handling', 'useEffect', 'useRef', 'useContext'],
    type: projectTypes.small,
    component: Counter,
  },
  {
    id: 'accordions',
    title: 'Counter',
    description: 'A simple counter app with increment/decrement/reset and timer functionality.',
    features: ['useState', 'event handling', 'useEffect', 'useRef', 'useContext'],
    type: projectTypes.small,
    component: Counter,
  },
  {
    id: 'form0validation',
    title: 'Counter',
    description: 'A simple counter app with increment/decrement/reset and timer functionality.',
    features: ['useState', 'event handling', 'useEffect', 'useRef', 'useContext'],
    type: projectTypes.large,
    component: Counter,
  },
    {
    id: 'advanced0filtering0e0commerce',
    title: 'Counter',
    description: 'A simple counter app with increment/decrement/reset and timer functionality.',
    features: ['useState', 'event handling', 'useEffect', 'useRef', 'useContext'],
    type: projectTypes.medium,
    component: Counter,
  },
]