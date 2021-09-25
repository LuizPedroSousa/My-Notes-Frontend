import React from 'react'

import { Meta, Story } from '@storybook/react'
import { TodoItem } from '.'

type Todo = {
  id: string
  hasChecked: boolean
  title: string
  description?: string
}

interface TodoItemProps {
  todo: Todo
}

export default {
  title: 'Components/TodoListCard/TodoItem',
  component: TodoItem,
  decorators: [Story => <Story />]
} as Meta

const Template: Story<TodoItemProps> = args => (
  <ul className="max-w-xs mx-auto rounded-md">
    <TodoItem {...args} />
    <TodoItem {...args} />
  </ul>
)

export const Normal = Template.bind({})

Normal.args = {
  todo: {
    title: 'Lista de compras',
    id: '602b6a72-c3fa-491b-9165-18d0d615a626',
    description: 'Doces, frutas etc 🛒',
    hasChecked: false
  }
}
