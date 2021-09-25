import React, { Component } from 'react'
import { TodoItem } from 'components/TodoListCard/TodoItem'

import { AddTodoButton } from 'components/Buttons/AddTodoButton'

type Todo = {
  id: string
  title: string
  hasChecked: boolean
  description?: string
}

interface TodoListCardProps {
  title: string
  todos: Todo[]
}

class TodoListCard extends Component<TodoListCardProps> {
  render(): JSX.Element {
    return (
      <div className="bg-card-normal break-words flex flex-col justify-between rounded-lg p-3">
        <strong className="text-xl capitalize mb-2">{this.props.title}</strong>

        <ul>
          {this.props.todos?.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
        <AddTodoButton />
      </div>
    )
  }
}
export { TodoListCard }
