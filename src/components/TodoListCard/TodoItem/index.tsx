import React, { Component } from 'react'
import { AiFillEdit } from 'react-icons/ai'

import { BsCheckAll } from 'react-icons/bs'

type Todo = {
  id: string
  title: string
  hasChecked: boolean
  description?: string
}

interface TodoItemProps {
  todo: Todo
}

class TodoItem extends Component<TodoItemProps> {
  render(): JSX.Element {
    return (
      <li className="w-full pt-4 pb-5 px-3 border-2 relative border-gray-400 rounded-md mb-4 bg-gray-600">
        <strong>{this.props.todo.title}</strong>
        <p>{this.props.todo.description}</p>
        <div className="absolute right-2 top-2 flex items-center justify-center">
          <button
            type="button"
            name={
              !this.props.todo.hasChecked ? 'Marcar todo' : 'Desmarcar todo'
            }
            aria-label={
              !this.props.todo.hasChecked ? 'Marcar todo' : 'Desmarcar todo'
            }
            className={`w-5 h-5 rounded-md transition-colors duration-200 ${
              this.props.todo.hasChecked
                ? `bg-green-400 flex items-center justify-center 
              hover:bg-green-600 hover:border-2 hover:border-green-400 focus:border-0 focus:ring-2 focus:ring-green-300`
                : 'bg-gray-400 hover:border-2 hover:border-gray-400 hover:bg-gray-300'
            }`}
          >
            {this.props.todo.hasChecked && (
              <BsCheckAll aria-label="Icone marcado" />
            )}
          </button>
          <button
            type="button"
            name={`Editar todo ${this.props.todo.title}`}
            aria-label={`Editar todo ${this.props.todo.title}`}
            className={
              'w-5 h-5 rounded-md ml-1 transition-colors duration-200 bg-gray-400 hover:border-2 hover:border-gray-400 hover:bg-gray-300'
            }
          >
            <AiFillEdit className="m-auto" />
          </button>
        </div>
      </li>
    )
  }
}

export { TodoItem }
