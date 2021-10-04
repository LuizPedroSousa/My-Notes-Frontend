import React from 'react'

import { Meta, Story } from '@storybook/react'
import AddListButton from '.'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AddListButtonProps {}

export default {
  title: 'Components/Buttons/AddListButton',
  component: AddListButton,
  decorators: [Story => <Story />]
} as Meta

const Template: Story<AddListButtonProps> = args => (
  <div className="max-w-xs mx-auto">
    <AddListButton {...args} />
  </div>
)

export const Normal = Template.bind({})

Normal.args = {}
