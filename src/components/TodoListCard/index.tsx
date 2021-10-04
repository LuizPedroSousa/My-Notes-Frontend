import React, { Component } from 'react'
import { TodoItem } from 'components/TodoListCard/TodoItem'
import AddTodoButton from 'components/Buttons/AddTodoButton'
import styles from './styles.module.css'

type Todo = {
  id: string
  title: string
  hasChecked: boolean
  description?: string
}

interface TodoListCardProps {
  title: string
  todos: Todo[]
  todoIndex?: number
}

class TodoListCard extends Component<TodoListCardProps> {
  render(): JSX.Element {
    return (
      <div className={styles.cardContainer}>
        <strong className="text-xl capitalize mb-2">{this.props.title}</strong>

        <ul>
          {this.props.todos?.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
        <AddTodoButton todoIndex={this.props.todoIndex} />
      </div>
    )
  }
}
export { TodoListCard }
