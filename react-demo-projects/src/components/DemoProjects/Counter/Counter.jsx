import { useRef, useState } from 'react'
import styles from './counter.module.css';

const Counter = () => {
  
  const [counter, setCounter] = useState(0)
  const timerRef = useRef()

  const handleIncrement = () => setCounter(prev => prev + 1)

  const handleDecrement = () => setCounter(prev => prev - 1)

  const handleReset = () => setCounter(0)

  const handleTimerStart = () => {
    if (timerRef.current) return

    timerRef.current = setInterval(() => {
      setCounter(prev => prev + 1)
    }, 1000)
  }

  const handleTimerStop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.number}>{counter}</h1>
      <div className={styles['btns-container']}>
        <button onClick={handleIncrement} className={styles.btn}>increment</button>
        <button onClick={handleDecrement} className={styles.btn}>decrement</button>
        <button onClick={handleReset} className={styles.btn}>reset</button>
        <button onClick={handleTimerStart} className={styles.btn}>start a timer</button>
        <button onClick={handleTimerStop} className={styles.btn}>stop a timer</button>
      </div>
    </div>
  )
}

export default Counter