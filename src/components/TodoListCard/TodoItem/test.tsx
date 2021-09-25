import React from 'react'
import { render, screen } from '@testing-library/react'
import { TodoItem } from '.'
import { defaultTodoTest } from 'utils/test-constants'

describe('<TodoItem />', () => {
  it('should render a todo item with correct text content', () => {
    render(<TodoItem todo={defaultTodoTest} />)

    const title = document.querySelector('li > strong')
    const description = document.querySelector('li > p')

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()

    expect(title.textContent).toEqual(defaultTodoTest.title)
    expect(description.textContent).toEqual(defaultTodoTest.description)
  })

  it('should render a empty button when hasChecked is false', () => {
    const todo = { ...defaultTodoTest, hasChecked: false }
    render(<TodoItem todo={todo} />)

    const button = screen.getByLabelText('Marcar todo')

    expect(button).toBeInTheDocument()
    expect(button).toHaveProperty('name', 'Marcar todo')
    expect(button).toHaveProperty('type', 'button')
    expect(button).toHaveClass(
      'bg-gray-400 hover:border-2 hover:border-gray-400 hover:bg-gray-300'
    )
  })

  it('should render a button with checked icon when hasChecked is true', () => {
    const todo = { ...defaultTodoTest, hasChecked: true }
    render(<TodoItem todo={todo} />)

    const button = screen.getByLabelText('Desmarcar todo')
    const icon = screen.getByLabelText('Icone marcado')

    expect(button).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
    expect(button).toHaveProperty('name', 'Desmarcar todo')
    expect(button).toHaveProperty('type', 'button')
    expect(button).toHaveClass(
      'bg-green-400 flex items-center justify-center hover:bg-green-600 hover:border-2 hover:border-green-400 focus:border-0 focus:ring-2 focus:ring-green-300'
    )
    expect(button).toContainElement(icon)
  })
})
