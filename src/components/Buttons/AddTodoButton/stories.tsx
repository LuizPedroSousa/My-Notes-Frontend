import React from 'react'

import { Meta, Story } from '@storybook/react'
import AddTodoButton from '.'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AddTodoButtonProps {}

export default {
  title: 'Components/Buttons/AddTodoButton',
  component: AddTodoButton,
  decorators: [Story => <Story />]
} as Meta

const Template: Story<AddTodoButtonProps> = args => (
  <div className="max-w-xs mx-auto">
    <AddTodoButton {...args} />
  </div>
)

export const Normal = Template.bind({})

Normal.args = {}
