import React from 'react'
import { type TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {

  onRemoveTodo: ({ id }: TodoId) => void

  onToogleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void

}

export const Todo: React.FC<Props> = ({ id, tittle, completed, onRemoveTodo, onToogleCompleteTodo }) => {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToogleCompleteTodo({
      id,
      completed: event.target.checked
    })
  }
  return (
  <div>
      <input
      className="toggle"
      type="checkbox"
      checked={completed}
      onChange={handleChangeCheckbox}
      />
      <label>{tittle}</label>
    <button className='destroy'
    onClick={() => { onRemoveTodo({ id }) }}>
x
    </button>
  </div>

  )
}
