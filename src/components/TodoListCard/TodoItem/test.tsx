import React from 'react'
import { render, screen } from 'utils/test-utils'
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
    expect(button).toContainElement(icon)
  })
})
