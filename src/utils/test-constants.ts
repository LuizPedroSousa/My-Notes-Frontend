import faker from 'faker'
import { v4 as uuid } from 'uuid'

type Todo = {
  id: string
  title: string
  hasChecked: boolean
  description?: string
}

export const defaultTodoTest: Todo = {
  id: uuid(),
  title: faker.random.words(2),
  description: faker.random.words(10),
  hasChecked: faker.datatype.boolean()
}
