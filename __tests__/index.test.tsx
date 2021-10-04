/* eslint-disable no-import-assign */
import React from 'react'
import { render, screen } from 'utils/test-utils'
import Home from '../src/pages/index'

jest.mock('next/router', () => ({
  withRouter: component => {
    component.defaultProps = {
      ...component.defaultProps,
      router: {
        route: '/',
        pathname: '',
        query: '',
        asPath: ''
      }
    }

    return component
  }
}))

describe('Home', () => {
  it('renders a main with cards container', () => {
    render(<Home />)

    const main = screen.getByRole('main')

    expect(main).toBeInTheDocument()
  })
})
