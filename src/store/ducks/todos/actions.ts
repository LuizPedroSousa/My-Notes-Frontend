import { v4 as uuid } from 'uuid'
import { PayloadAction } from '@reduxjs/toolkit'
import { Types } from './types'

type Todo = {
  id: string
  title: string
  hasChecked: boolean
  description?: string
}

type TodoList = {
  id: string
  title: string
  todos: Todo[]
}

interface AddTodoListProps {
  todoList: TodoList
}

interface AddTodoProps {
  todoList: TodoList[]
}

export const addTodo = (
  todoList: TodoList[],
  todoTitle: string,
  index: number
): PayloadAction<AddTodoProps> => {
  const newTodoList = [...todoList]
  newTodoList[index]?.todos.push({
    id: uuid(),
    title: todoTitle,
    hasChecked: false
  } as Todo)

  return {
    type: Types.ADD_TODO,
    payload: {
      todoList: newTodoList
    }
  }
}

export const addTodoList = (title: string): PayloadAction<AddTodoListProps> => {
  return {
    type: Types.ADD_TODO_LIST,
    payload: {
      todoList: {
        id: uuid(),
        title,
        todos: []
      }
    }
  }
}
