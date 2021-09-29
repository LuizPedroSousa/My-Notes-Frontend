import React from 'react'
import { render, screen, within, waitFor } from '@testing-library/react'
import { TodoListCard } from '.'
import { defaultTodoListTest } from 'utils/test-constants'

describe('<TodoListCard />', () => {
  it('should render card title with the same component title', async () => {
    const { container } = render(
      <TodoListCard
        title={defaultTodoListTest.title}
        todos={defaultTodoListTest.todos}
      />
    )

    const strong = screen.getByText(defaultTodoListTest.title)

    expect(container).toBeInTheDocument()
    expect(strong).toBeInTheDocument()
  })

  it('should render a ul with the same size of list array', async () => {
    render(
      <TodoListCard
        title={defaultTodoListTest.title}
        todos={defaultTodoListTest.todos}
      />
    )

    const ul = screen.getByRole('list')

    const todos = await within(ul).findAllByRole('listitem')

    expect(ul).toBeInTheDocument()
    expect(todos).toHaveLength(defaultTodoListTest.todos.length)
  })

  it('should render a children todos with correct title and description', async () => {
    render(
      <TodoListCard
        title={defaultTodoListTest.title}
        todos={defaultTodoListTest.todos}
      />
    )

    const ul = screen.getByRole('list')

    expect(ul).toBeInTheDocument()

    await waitFor(() => {
      defaultTodoListTest.todos.forEach(todo => {
        const title = within(ul).getByText(todo.title)
        const description = within(ul).getByText(todo.description)
        expect(title).toBeInTheDocument()
        expect(description).toBeInTheDocument()
      })
    })
  })
})
