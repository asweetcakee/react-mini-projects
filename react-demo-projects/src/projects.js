import Counter from './components/DemoProjects/Counter/Counter'
import Todo from './components/DemoProjects/Todo/Todo'
import Meals from './components/DemoProjects/MealsAPI/Meals'

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
    id: 'mealsapi',
    title: 'Meals API',
    description: 'An app that fetches and displays meals from a public API, with a responsive grid layout.',
    features: ['useState', 'useEffect', 'axios', 'async/await', 'API integration', 'React Masonry'],
    type: projectTypes.large,
    component: Meals,
  },
  {
    id: 'calculator',
    title: 'Counter',
    description: 'A simple counter app with increment/decrement/reset and timer functionality.',
    features: ['useState', 'event handling', 'useEffect', 'useRef', 'useContext'],
    type: projectTypes.small,
    component: Counter,
  },
  {
    id: 'colort0oggler',
    title: 'Counter',
    description: 'A simple counter app with increment/decrement/reset and timer functionality.',
    features: ['useState', 'event handling', 'useEffect', 'useRef', 'useContext'],
    type: projectTypes.small,
    component: Counter,
  },
  {
    id: 'search0icon',
    title: 'Counter',
    description: 'A simple counter app with increment/decrement/reset and timer functionality.',
    features: ['useState', 'event handling', 'useEffect', 'useRef', 'useContext'],
    type: projectTypes.large,
    component: Counter,
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