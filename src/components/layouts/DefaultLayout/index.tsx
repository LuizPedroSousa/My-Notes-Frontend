import React, { Component } from 'react'
import styles from './styles.module.css'

class DefaultLayout extends Component {
  render(): JSX.Element {
    return (
      <div className={'w-full' + styles.container}>{this.props.children}</div>
    )
  }
}

export { DefaultLayout }
