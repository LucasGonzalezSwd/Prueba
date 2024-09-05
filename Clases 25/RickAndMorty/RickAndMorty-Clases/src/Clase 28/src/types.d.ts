export interface Todo {
  id: string
  tittle: string
  completed: boolean

}

export type TodoTittle = Pick<Todo, 'tittle'>
export type TodoId = Pick<Todo, 'id'>
export type TodoCompleted = Pick<Todo, 'completed'>

export type ListOfTodos = Todo[]
