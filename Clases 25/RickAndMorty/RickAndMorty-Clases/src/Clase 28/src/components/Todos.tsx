import { type TodoId, type ListOfTodos, type Todo as TodoType } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onToogleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  onRemoveTodo: ({ id }: TodoId) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToogleCompleteTodo }) => {
  return (
        <ul className='todo-list'>
            {todos.map(todo => (
                <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
                    <Todo
                     key={todo.id}
                     id={todo.id}
                     tittle={todo.tittle}
                     completed={todo.completed}
                     onRemoveTodo={onRemoveTodo}
                     onToogleCompleteTodo={onToogleCompleteTodo}
                     />
                </li>
            ))}
        </ul>
  )
}
