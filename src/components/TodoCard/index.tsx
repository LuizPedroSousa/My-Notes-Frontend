import React, { Component } from 'react'

import { AiOutlinePlus } from 'react-icons/ai'

type Todo = {
  title: string
}

interface TodoCardProps {
  title: string
  todos: Todo[]
}

class TodoCard extends Component<TodoCardProps> {
  render(): JSX.Element {
    return (
      <div className="bg-card-normal">
        <strong>{this.props.title}</strong>

        <button type="button" name="Adicionar cartão">
          <span>
            <AiOutlinePlus />
          </span>
          Adicionar cartão
        </button>
      </div>
    )
  }
}
export { TodoCard }
