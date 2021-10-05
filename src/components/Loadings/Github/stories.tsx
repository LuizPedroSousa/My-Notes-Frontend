import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { GithubLoading } from '.'

export default {
  title: 'Components/Loadings/Github',
  component: GithubLoading,
  args: {}
} as ComponentMeta<typeof GithubLoading>

const Template: ComponentStory<typeof GithubLoading> = args => (
  <div className="max-w-xl mx-auto">
    <GithubLoading {...args} />
  </div>
)

export const Normal = Template.bind({})
Normal.args = {}
