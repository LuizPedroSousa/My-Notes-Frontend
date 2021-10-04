import React from 'react'
import { render, screen } from 'utils/test-utils'
import AddListButton from '.'

describe('<AddListButton />', () => {
  it('should render a button with correct text', () => {
    render(<AddListButton />)

    const button = screen.getByLabelText('Adicionar lista')

    const p = document.querySelector('p')

    expect(button).toBeInTheDocument()

    expect(button).toHaveProperty('name', 'Adicionar lista')
    expect(button).toHaveProperty('type', 'button')

    expect(button).toContainElement(p)
    expect(p.textContent).toEqual('Adicionar outra lista')
  })
})
