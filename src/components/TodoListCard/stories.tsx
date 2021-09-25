import React from 'react'

import { Meta, Story } from '@storybook/react'
import { TodoListCard } from '.'

type Todo = {
  id: string
  title: string
  hasChecked: boolean
  description?: string
}

interface TodoListCardProps {
  title: string
  todos: Todo[]
}

export default {
  title: 'Components/TodoListCard',
  component: TodoListCard,
  decorators: [Story => <Story />]
} as Meta

const Template: Story<TodoListCardProps> = args => (
  <div className="max-w-xs mx-auto">
    <TodoListCard {...args} />
  </div>
)

export const Normal = Template.bind({})

Normal.args = {
  title: 'A fazer',
  todos: [
    {
      title: 'Lista de compras',
      hasChecked: false,
      id: '602b6a72-c3fa-491b-9165-18d0d615a626',
      description: 'Doces, frutas etc 🛒'
    }
  ]
}
