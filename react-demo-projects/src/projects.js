import Counter from './components/DemoProjects/Counter/Counter'

export const projectTypes = {
  small: 'small',
  medium: 'medium',
  large: 'large'
}

export const projects = [
  {
    id: 'counter',
    title: 'Counter',
    description: 'A simple counter app with increment/decrement/reset and timer functionality.',
    features: ['useState', 'event handling', 'useEffect', 'useRef', 'useContext'],
    type: projectTypes.small,
    component: Counter,
  },
  {
    id: 'counter',
    title: 'Counter',
    description: 'A simple counter app with increment/decrement/reset and timer functionality.',
    features: ['useState', 'event handling', 'useEffect', 'useRef', 'useContext'],
    type: projectTypes.small,
    component: Counter,
  },
  {
    id: 'counter',
    title: 'Counter',
    description: 'A simple counter app with increment/decrement/reset and timer functionality.',
    features: ['useState', 'event handling', 'useEffect', 'useRef', 'useContext'],
    type: projectTypes.large,
    component: Counter,
  },
  {
    id: 'counter',
    title: 'Counter',
    description: 'A simple counter app with increment/decrement/reset and timer functionality.',
    features: ['useState', 'event handling', 'useEffect', 'useRef', 'useContext'],
    type: projectTypes.small,
    component: Counter,
  }
]