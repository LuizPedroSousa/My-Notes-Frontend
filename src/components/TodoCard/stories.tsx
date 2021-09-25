import React from 'react'

import { Meta, Story } from '@storybook/react'
import { TodoCard } from '.'

type Todo = {
  title: string
}

interface HeaderProps {
  title: string
  todos: Todo[]
}

export default {
  title: 'Components/TodoCard',
  component: TodoCard,
  decorators: [Story => <Story />]
} as Meta

const Template: Story<HeaderProps> = args => <TodoCard {...args} />

export const Normal = Template.bind({})

Normal.args = {
  title: 'A fazer',
  todos: [{ title: 'Lista de compras' }]
}
