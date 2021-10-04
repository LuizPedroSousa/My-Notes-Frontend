import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from 'store'
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(<Provider store={store}>{ui}</Provider>, options)

// eslint-disable-next-line import/export
export * from '@testing-library/react'

// eslint-disable-next-line import/export
export { customRender as render }
