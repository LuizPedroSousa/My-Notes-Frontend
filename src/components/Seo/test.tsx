import { render, waitFor } from '@testing-library/react'
import React from 'react'
import { defaultSeoTest } from 'utils/test-constants'
import Seo from '.'

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>
    }
  }
})

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

describe('<Seo />', () => {
  it('should render a thumb with correct url', async () => {
    render(<Seo {...defaultSeoTest} />, { container: document.head })

    const correctThumbURL = `https://${process.env.VERCEL_URL}/images/thumbs${defaultSeoTest.thumb}`

    const images = document.head.querySelectorAll(
      'meta[name=image], meta[property="og:image"], meta[name="twitter:image:src"], meta[name="twitter:image"]'
    )

    await waitFor(() => {
      images.forEach(image => {
        expect(image).toHaveProperty('content', correctThumbURL)
      })
    })
  })

  it('should render a metatag with correct url', async () => {
    render(<Seo {...defaultSeoTest} />, { container: document.head })

    const correctPageURL = `https://${process.env.VERCEL_URL}`

    const urlTags = document.head.querySelectorAll(
      'meta[name="twitter:url"], meta[property="og:url"]'
    )

    await waitFor(() => {
      urlTags.forEach(urlTag => {
        expect(urlTag).toHaveProperty('content', correctPageURL)
      })
    })
  })

  it('should render a metatag with correct title text', async () => {
    render(<Seo {...defaultSeoTest} />, { container: document.head })

    const correctTitle = `${defaultSeoTest.title} | My Notes`

    const titleTags = document.head.querySelectorAll(
      'meta[name="title"], meta[property="og:title"], meta[property="og:image:alt"], meta[name="image:alt"], meta[name="twitter:title"], meta[name="twitter:image:alt"]'
    )

    await waitFor(() => {
      titleTags.forEach(titleTag => {
        expect(titleTag).toHaveProperty('content', correctTitle)
      })
    })
  })

  it('should render a metatag with correct description text', async () => {
    render(<Seo {...defaultSeoTest} />, { container: document.head })

    const descriptionTags = document.head.querySelectorAll(
      'meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]'
    )

    await waitFor(() => {
      descriptionTags.forEach(descriptionTag => {
        expect(descriptionTag).toHaveProperty(
          'content',
          defaultSeoTest.description
        )
      })
    })
  })
})
