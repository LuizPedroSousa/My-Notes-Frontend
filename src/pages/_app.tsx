import React from 'react'
import App, { AppContext } from 'next/app'
import { Provider } from 'react-redux'
import { store } from 'store'
import { ToastContainer } from 'react-toastify'
import 'styles/global.css'
import 'react-toastify/dist/ReactToastify.css'
export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render(): JSX.Element {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <ToastContainer />
        <Component {...pageProps} />
      </Provider>
    )
  }
}
