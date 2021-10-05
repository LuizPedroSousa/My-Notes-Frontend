import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { NoteIcon } from '.'

export default {
  title: 'Components/AnimatedSvgs/NoteIcon',
  component: NoteIcon,
  args: {}
} as ComponentMeta<typeof NoteIcon>

const Template: ComponentStory<typeof NoteIcon> = args => (
  <div className="max-w-sm p-2 rounded-md">
    <NoteIcon {...args} />
  </div>
)

export const Normal = Template.bind({})
Normal.args = {}
