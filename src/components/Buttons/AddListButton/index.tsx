import React, { Component } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

class AddListButton extends Component {
  render(): JSX.Element {
    return (
      <button
        type="button"
        className={`
            w-full flex items-center bg-opacity-25 font-medium 
            justify-start rounded-md p-2 border-transparent border-2
            overflow-hidden relative z-20
            bg-gray-400 hover:bg-gray-600
            hover:border-gray-400 focus:border-transparent focus:bg-gray-700 focus:ring-2 focus:ring-gray-200
        `}
        name="Adicionar lista"
        aria-label="Adicionar lista"
      >
        <div className="w-1/2 h-full left-0 filter blur-2xl animate-pulse duration-1000 absolute z-10 bg-blue-400"></div>
        <div className="w-1/2 h-full right-0 filter blur-2xl animate-pulse duration-1000 absolute z-0 bg-pink-400"></div>
        <span className="mr-1 z-10 text-white text-xl">
          <AiOutlinePlus />
        </span>
        <p className="z-10">Adicionar outra lista</p>
      </button>
    )
  }
}

export { AddListButton }
