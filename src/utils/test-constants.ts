import faker from 'faker'
import { v4 as uuid } from 'uuid'

type Todo = {
  id: string
  title: string
  hasChecked: boolean
  description?: string
}

type TodoList = {
  title: string
  todos: Todo[]
}

const generateTodo = (): Todo => {
  return {
    id: uuid(),
    title: faker.random.words(2),
    description: faker.random.words(10),
    hasChecked: faker.datatype.boolean()
  }
}

const generateTodos = (): Todo[] => {
  const todos: Todo[] = []
  for (let i = 0; i < faker.datatype.number(10); i++) {
    todos.push(generateTodo())
  }

  return todos
}

export const defaultTodoTest: Todo = generateTodo()

export const defaultTodoListTest: TodoList = {
  title: faker.random.words(2),
  todos: generateTodos()
}
