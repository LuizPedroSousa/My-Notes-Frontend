import React from 'react'
import { TodoListCard } from 'components/TodoListCard'

import AddListButton from 'components/Buttons/AddListButton'
import styles from './styles.module.css'
import { connect } from 'react-redux'
import { RootState } from 'store'

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

interface TodosProps {
  todoList: TodoList[]
}

const Todos = ({ todoList }: TodosProps) => (
  <section
    className={styles.todosSection}
    style={{
      gridTemplateColumns: `repeat(${todoList.length + 1}, max-content)`
    }}
  >
    {todoList.map(({ id, title, todos }, i) => (
      <TodoListCard key={id} title={title} todoIndex={i} todos={todos} />
    ))}

    <AddListButton />
  </section>
)

export default connect((state: RootState) => ({
  todoList: state.todos.todoList
}))(Todos)
