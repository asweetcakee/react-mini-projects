import { useState } from "react"
import fullStyles from './todo.module.css'
import embeddedStyles from './todo.embedded.module.css'

const Todo = ({ embedded = false }) => {
  const styles = embedded ? embeddedStyles : fullStyles

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const handleSubmit = () => {
    if (input.trim() === '') return

    setTodos(todos => {
      return todos.concat({
        text: input,
        id: Date.now()
      })
    })
    setInput('')
  }

  const handleRemoveTodo = (id) => setTodos(todos => todos.filter(t => t.id !== id))

  return (
    <div className={styles.todo}>
      <div className={styles.container}>
        <input 
          type='text'
          placeholder='New todo'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleSubmit} className={styles['btn-submit']}>Submit</button>
        <ul className={styles['todos-list']}>
          {todos.map(t => 
            <li key={t.id} className={styles['todos-item']}>
              <span className={styles['item-text']}>{t.text}</span>
              <button 
                className={styles['item-remove']}
                onClick={() => handleRemoveTodo(t.id)}
              >
                remove
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Todo