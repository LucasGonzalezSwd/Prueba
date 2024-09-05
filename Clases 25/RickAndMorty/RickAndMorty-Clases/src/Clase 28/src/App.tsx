
import { useState } from 'react'
import './App.css'
import { Todos } from './components/Todos'
import { type TodoId, type Todo as TodoType } from './types'

const App: React.FC = () => {
  const mocktodo = [
    {
      id: '1',
      tittle: 'comprar mercaderia',
      completed: true
    },
    {
      id: '2',
      tittle: 'viajar a dubai',
      completed: false
    },
    {
      id: '3',
      tittle: 'terminar trabajo pendiente',
      completed: false
    },
    {
      id: '4',
      tittle: 'comprar mercaderia',
      completed: true
    },
    {
      id: '5',
      tittle: 'viajar a dubai',
      completed: false
    },
    {
      id: '6',
      tittle: 'terminar trabajo pendiente',
      completed: false
    }
  ]
  const [todos, setTodos] = useState(mocktodo)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }
  return (

    <div className='todoapp'>
            <Todos
            onToogleCompleteTodo={handleCompleted}
            onRemoveTodo={handleRemove}
            todos={todos}/>
    </div>
  )
}

export default App
