import React, { Component } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { BiX } from 'react-icons/bi'

import * as TodosActions from 'store/ducks/todos/actions'

import { FormikBag, withFormik } from 'formik'
import styles from './styles.module.css'

interface AddListButtonProps {
  addTodoList?: (title: string) => void
  handleSubmit?: () => void
  getFieldProps?: (field: string) => void
  setFieldValue?: (field: string, value: any) => void
  setStatus?: ({ success: boolean }) => void
  status?: {
    success: boolean
  }
}

interface StateProps {
  isEditing: boolean
}

class AddListButton extends Component<AddListButtonProps, StateProps> {
  constructor(props) {
    super(props)
    this.onCloseEditing = this.onCloseEditing.bind(this)
    this.onOpenEditing = this.onOpenEditing.bind(this)
  }

  state = {
    isEditing: false
  }

  onCloseEditing() {
    this.props.setFieldValue('title', '')
    this.setState({ isEditing: false })
  }

  onOpenEditing() {
    this.setState({ isEditing: true })
  }

  componentDidUpdate(prevProps: AddListButtonProps) {
    const { success: wasSuccess = false } = prevProps.status || {}
    const { success = false } = this.props.status || {}

    if (success && !wasSuccess) {
      this.onCloseEditing()
      this.props.setStatus({ success: false })
    }
  }

  render(): JSX.Element {
    return (
      <div className={styles.container}>
        {this.state.isEditing ? (
          <form
            className={styles.addListForm}
            onSubmit={this.props.handleSubmit}
          >
            <input
              type="text"
              placeholder="Insira o titulo da lista..."
              {...this.props.getFieldProps('title')}
            />
            <div>
              <button
                type="submit"
                name="confirmar"
                aria-label="Adicionar todo"
              >
                Adicionar Lista
              </button>
              <button
                type="button"
                name="cancelar"
                onClick={this.onCloseEditing}
                aria-label="Não adicionar todo"
              >
                <BiX />
              </button>
            </div>
          </form>
        ) : (
          <button
            type="button"
            className={styles.addTodoButton}
            name="Adicionar lista"
            onClick={this.onOpenEditing}
            aria-label="Adicionar lista"
          >
            <div className="w-1/2 h-full left-0 filter blur-2xl animate-pulse duration-1000 absolute z-10 bg-blue-400"></div>
            <div className="w-1/2 h-full right-0 filter blur-2xl animate-pulse duration-1000 absolute z-0 bg-pink-400"></div>
            <span className="mr-1 z-10 text-white text-xl">
              <AiOutlinePlus />
            </span>
            <p className="z-10">Adicionar outra lista</p>
          </button>
        )}
      </div>
    )
  }
}

const mapToDispatchProps = (dispatch: Dispatch) =>
  bindActionCreators(TodosActions, dispatch)

const EnhancedAddListButton = withFormik({
  mapPropsToValues: () => ({ title: '' }),
  handleSubmit(
    { title },
    {
      props: { addTodoList },
      setStatus
    }: {
      props: {
        addTodoList?: (title: string) => void
      }
    } & FormikBag<AddListButtonProps, any>
  ) {
    addTodoList(title)
    setStatus({ success: true })
  }
})(AddListButton as any)

export default connect(null, mapToDispatchProps)(EnhancedAddListButton)
