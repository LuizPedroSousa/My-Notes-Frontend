import { GetServerSideProps } from 'next'
import { Component } from 'react'

export default class Github extends Component {
  render(): JSX.Element {
    return null
  }
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    redirect: {
      destination: ``,
      permanent: false
    }
  }
}
