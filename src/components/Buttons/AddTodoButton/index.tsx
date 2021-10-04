import { FormikBag, withFormik } from 'formik'
import React, { Component, FormEvent } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { BiX } from 'react-icons/bi'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { RootState } from 'store'
import * as TodosActions from 'store/ducks/todos/actions'
import styles from './styles.module.css'

type Todo = {
  id: string
  title: string
  hasChecked: boolean
  description?: string
}

type TodoList = {
  id: string
  title: string
  todos: Todo[]
}

interface AddTodoButtonProps {
  dispatch?: Dispatch
  todoIndex: number
  todoList?: TodoList[]
  addTodoList?: (title: string) => void
  handleSubmit?: (e: FormEvent) => void
  getFieldProps?: (field: string) => void
  setFieldValue?: (field: string, value: any) => void
  addTodo?: typeof TodosActions.addTodo
}

class AddTodoButton extends Component<AddTodoButtonProps> {
  constructor(props) {
    super(props)
    this.onCloseEditing = this.onCloseEditing.bind(this)
    this.onOpenEditing = this.onOpenEditing.bind(this)
    this.handleAddTodo = this.handleAddTodo.bind(this)
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

  handleAddTodo(e: FormEvent) {
    e.preventDefault()
    this.props.handleSubmit(e)
    this.onCloseEditing()
  }

  render(): JSX.Element {
    return (
      <div className={styles.container}>
        {this.state.isEditing ? (
          <form className={styles.addTodoForm} onSubmit={this.handleAddTodo}>
            <textarea
              type="text"
              placeholder="Insira o titulo desta tarefa..."
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
            name="Adicionar todo"
            aria-label="Adicionar todo"
            className={styles.addTodoButton}
            onClick={this.onOpenEditing}
          >
            <span className="mr-1 text-white text-xl">
              <AiOutlinePlus aria-label="Icone de mais" />
            </span>
            Adicionar Todo
          </button>
        )}
      </div>
    )
  }
}
const EnhancedAddTodoButton = withFormik({
  mapPropsToValues: () => ({ title: '' }),
  handleSubmit(
    { title },
    {
      props: { addTodo, todoList, todoIndex },
      setStatus
    }: {
      props: AddTodoButtonProps | any
    } & FormikBag<AddTodoButtonProps, { title: string }>
  ) {
    addTodo(todoList, title, todoIndex)
    setStatus({ success: true })
  }
})(AddTodoButton as any)

const mapStateToProps = ({ todos }: RootState) => ({
  todoList: todos.todoList
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(TodosActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnhancedAddTodoButton)
