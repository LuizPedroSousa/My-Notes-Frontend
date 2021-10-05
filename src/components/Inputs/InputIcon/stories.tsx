import React, { HTMLProps } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AiOutlineMail } from 'react-icons/ai'

import { InputIcon } from '.'
import { RiLockPasswordFill } from 'react-icons/ri'

interface InputIconProps {
  icon: JSX.Element
  inputProps?: HTMLProps<HTMLInputElement>
  isPasswordType?: boolean
}

export default {
  title: 'Components/Inputs/InputIcon',
  component: InputIcon,
  decorators: [Story => <Story />],
  args: {}
} as ComponentMeta<typeof InputIcon>

const Template: ComponentStory<typeof InputIcon> = args => (
  <div className="max-w-sm px-3 py-10 rounded-md bg-card-normal mx-auto">
    <InputIcon {...args} />
  </div>
)

export const Normal = Template.bind({})
export const Password = Template.bind({})

Normal.args = {
  icon: <AiOutlineMail />,
  inputProps: { type: 'email', placeholder: 'Email' },
  isPasswordType: false
} as InputIconProps

Password.args = {
  icon: <RiLockPasswordFill />,
  inputProps: { placeholder: 'Password' },
  isPasswordType: true
} as InputIconProps
