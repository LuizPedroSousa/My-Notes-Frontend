import React from 'react'
import { render, screen } from 'utils/test-utils'
import AddTodoButton from '.'

describe('<AddTodoButton />', () => {
  it('should render a button with correct text', () => {
    render(<AddTodoButton />)

    const button = screen.getByLabelText('Adicionar todo')

    expect(button).toBeInTheDocument()

    expect(button).toHaveProperty('name', 'Adicionar todo')
    expect(button).toHaveProperty('type', 'button')

    expect(button.textContent).toEqual('Adicionar Todo')
  })

  it('should render a button that contains a span with check icon', () => {
    render(<AddTodoButton />)

    const button = screen.getByLabelText('Adicionar todo')
    const span = document.querySelector('span')
    const icon = screen.getByLabelText('Icone de mais')

    // check if exists
    expect(button).toBeInTheDocument()
    expect(span).toBeInTheDocument()
    expect(icon).toBeInTheDocument()

    expect(button).toHaveProperty('name', 'Adicionar todo')
    expect(button).toHaveProperty('type', 'button')

    expect(button).toContainElement(span as any)
    expect(span).toContainElement(icon)
  })
})
