import { useState } from "react"
import fullStyles from './calculator.module.css'
import embeddedStyles from './calculator.embedded.module.css'

const operators = '+-*/'
const numbers = '0123456789'

/*
  Splits input value into an array of numbers and operators 
  [25, '/', 5]
  
  '.' case:
  Transforms .5 into 0.5
  Enables correct tokenizing of '.' chars
*/
const tokenize = (expression) => {
  const tokens = []
  let numberBuffer = ''
  let hasDot = false
  
  for (let char of expression) {
    if (numbers.includes(char)) {
      numberBuffer += char
    } else if (char === '.') {
      if (!hasDot) {
        if (numberBuffer === '') numberBuffer = '0'
        numberBuffer += '.'
        hasDot = true
      }
    } else if (operators.includes(char)) {
      if (numberBuffer) {
        tokens.push(parseFloat(numberBuffer))
        numberBuffer = ''
        hasDot = false
      }
      tokens.push(char)
    }
  }

  if (numberBuffer) tokens.push(parseFloat(numberBuffer))
  return tokens
}

/*
  Reverse Polish Notation (RPN)
  translates [1, '+', 25, '/', 5] into [1, 25, 5, '/', '+']
*/
const toRPN = (tokens) => {
  const output = []
  const ops = []
  const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 }

  tokens.forEach(token => {
    console.log('token', token)
    if (typeof token === 'number') {
      output.push(token)
    } else if (operators.includes(token)) {
      while (ops.length && precedence[ops[ops.length - 1]] >= precedence[token]) {
        const highestPrecedence = ops.pop()
        output.push(highestPrecedence)
      }
      ops.push(token)
    }
  })

  while (ops.length) output.push(ops.pop())
  return output
}

/*
  Evaluates RPN
  Stacks all numbers and pops by 'a' and 'b' arguments
  stack = [1, 25, 5]
  left tokens = ['/', '+']
  b = 5
  a = 25
  token = '/'
  a / b = 5
  stack = [1, 5]
  and so on
*/
const evalRPN = (rpn) => {
  const stack = []

  rpn.forEach(token => {
    if (typeof token === 'number') {
      stack.push(token)
    } else {
      const b = stack.pop()
      const a = stack.pop()
      switch (token) {
        case '+': stack.push(a + b); break
        case '-': stack.push(a - b); break
        case '*': stack.push(a * b); break
        case '/': stack.push(a / b); break
        default: throw new Error('Invalid operator: ' + token)
      }
    }
  })

  return stack[0]
}

const Calculator = ({ embedded = false }) => {
  const styles = embedded ? embeddedStyles : fullStyles
  const [inputVal, setInputVal] = useState('')

  const handleDisplay = (value) => {
    const lastChar = inputVal.slice(-1)
    if (operators.includes(value)) {
      if (inputVal === '') return
      if (operators.includes(lastChar)) {
        setInputVal(inputVal.slice(0, -1) + value) // Replaces last operator
        return
      }
    }

    if (value === '.') {
      const lastOpIndex = Math.max(
        inputVal.lastIndexOf('+'),
        inputVal.lastIndexOf('-'),
        inputVal.lastIndexOf('*'),
        inputVal.lastIndexOf('/')
      )
      const currentNumber = inputVal.slice(lastOpIndex + 1)
      if (currentNumber.includes('.')) {
        console.log('Im here 1')
        return
      }
      if (currentNumber === '') {
        setInputVal(inputVal + '0.')
        return
      }
    }

    setInputVal(inputVal + value)
  }

  const handleCalculate = () => {
    try {
      const tokens = tokenize(inputVal)
      const rpn = toRPN(tokens)
      const result = evalRPN(rpn)
      setInputVal(String(result))
    } catch {
      setInputVal("Error")
    }
  }

  const handleClear = () => setInputVal('')

  const handleDelete = () => {
    const trimmedInput = inputVal.slice(0, -1)
    setInputVal(trimmedInput)
  }

  return (
    <div className={styles.page}>
      <form className={styles.calculator} name='calc' onSubmit={e => e.preventDefault()}>
        <input 
          type='text'
          className={styles.value} 
          value={inputVal}
          readOnly
        />
        <span className={styles.clear} onClick={handleClear}>c</span>
        <span onClick={() => handleDisplay('/')}>/</span>
        <span onClick={() => handleDisplay('*')}>*</span>
        <span className={styles.backspace} onClick={handleDelete}>⌫</span>
        <span onClick={() => handleDisplay('7')}>7</span>
        <span onClick={() => handleDisplay('8')}>8</span>
        <span onClick={() => handleDisplay('9')}>9</span>
        <span onClick={() => handleDisplay('-')}>-</span>
        <span onClick={() => handleDisplay('4')}>4</span>
        <span onClick={() => handleDisplay('5')}>5</span>
        <span onClick={() => handleDisplay('6')}>6</span>
        <span className={styles.plus} onClick={() => handleDisplay('+')}>+</span>
        <span onClick={() => handleDisplay('1')}>1</span>
        <span onClick={() => handleDisplay('2')}>2</span>
        <span onClick={() => handleDisplay('3')}>3</span>
        <span onClick={() => handleDisplay('0')}>0</span>
        <span onClick={() => handleDisplay('00')}>00</span>
        <span onClick={() => handleDisplay('.')}>.</span>
        <span className={styles.equal} onClick={handleCalculate}>=</span>
      </form>
    </div>
  )
}

export default Calculator