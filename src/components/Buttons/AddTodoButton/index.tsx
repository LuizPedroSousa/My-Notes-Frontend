import React, { Component } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

class AddTodoButton extends Component {
  render(): JSX.Element {
    return (
      <button
        type="button"
        className="w-full flex items-center font-medium justify-start rounded-md p-2 bg-gray-400 hover:bg-gray-600 hover:border-2 hover:border-gray-400 focus:bg-gray-700 focus:ring-2 focus:ring-gray-200"
        name="Adicionar cartão"
      >
        <span className="mr-1 text-white text-xl">
          <AiOutlinePlus />
        </span>
        Adicionar Todo
      </button>
    )
  }
}

export { AddTodoButton }
