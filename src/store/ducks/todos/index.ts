import { PayloadAction } from '@reduxjs/toolkit'
import { Types } from './types'

const initial_state = {
  todoList: [
    {
      id: 'a',
      title: 'A fazer',
      todos: [
        { id: '12', title: 'a', hasChecked: false, description: '' },
        { id: '23', title: 'a', hasChecked: false, description: '' }
      ]
    },
    {
      id: 'adas',
      title: 'Em andamento',
      todos: [
        { id: '12', title: 'a', hasChecked: false, description: '' },
        { id: '23', title: 'a', hasChecked: false, description: '' }
      ]
    }
  ]
}

const todos = (state = initial_state, action: PayloadAction<any>) => {
  switch (action.type) {
    case Types.ADD_TODO:
      console.log('asd')
      return { todoList: [] }

    case Types.ADD_TODO_LIST:
      return { todoList: [...state.todoList, action?.payload.todoList] }

    default:
      return state
  }
}

export { todos }
