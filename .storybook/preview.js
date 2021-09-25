import { addDecorator } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'
import "../src/styles/global.css"


addDecorator(withNextRouter())

export const decorators = [
  (Story, context) => (
        <Story />
  )
]