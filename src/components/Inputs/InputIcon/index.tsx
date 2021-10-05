import React, { Component, HTMLProps } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

import styles from './styles.module.css'

interface InputIconProps {
  icon: JSX.Element
  inputProps?: HTMLProps<HTMLInputElement>
  isPasswordType?: boolean
}

interface InputIconState {
  hasViewPassword: boolean
}

class InputIcon extends Component<InputIconProps, InputIconState> {
  constructor(props) {
    super(props)
    this.toggleViewPassword = this.toggleViewPassword.bind(this)
  }

  state = { hasViewPassword: false }

  toggleViewPassword() {
    this.setState({ hasViewPassword: !this.state.hasViewPassword })
  }

  render(): JSX.Element {
    const passwordInputProps = this.props.isPasswordType
      ? {
          type: this.state.hasViewPassword ? 'text' : 'password',
          style: { paddingRight: '2.5rem' }
        }
      : {}
    return (
      <div className={styles.inputContainer}>
        <span>{this.props.icon}</span>
        <input {...this.props.inputProps} {...passwordInputProps} />
        {this.props.isPasswordType === true && (
          <button
            type="button"
            name="Ver senha"
            onClick={this.toggleViewPassword}
            className={styles.viewPasswordButton}
            aria-label="Ver senha digitada"
          >
            {this.state.hasViewPassword ? (
              <AiFillEyeInvisible />
            ) : (
              <AiFillEye />
            )}
          </button>
        )}
      </div>
    )
  }
}

export { InputIcon }
