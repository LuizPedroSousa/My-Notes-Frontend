import React, { Component } from 'react'
import { AiFillEdit } from 'react-icons/ai'

import { BsCheckAll } from 'react-icons/bs'

import styles from './styles.module.css'

type Todo = {
  id: string
  title: string
  hasChecked: boolean
  description?: string
}

interface TodoItemProps {
  todo: Todo
}

class TodoItem extends Component<TodoItemProps> {
  render(): JSX.Element {
    return (
      <li className={styles.todoItemContainer}>
        <strong>{this.props.todo.title}</strong>
        <p>{this.props.todo.description}</p>
        <div className={styles.optionsContainer}>
          <button
            type="button"
            name={
              !this.props.todo.hasChecked ? 'Marcar todo' : 'Desmarcar todo'
            }
            aria-label={
              !this.props.todo.hasChecked ? 'Marcar todo' : 'Desmarcar todo'
            }
            className={`
              ${styles.buttonOption}

              ${
                this.props.todo.hasChecked
                  ? styles.checkedButton
                  : styles.uncheckedButton
              }`}
          >
            {this.props.todo.hasChecked && (
              <BsCheckAll aria-label="Icone marcado" />
            )}
          </button>
          <button
            type="button"
            name={`Editar todo ${this.props.todo.title}`}
            aria-label={`Editar todo ${this.props.todo.title}`}
            className={`${styles.buttonOption} ${styles.editTodoButton}`}
          >
            <AiFillEdit className="m-auto" />
          </button>
        </div>
      </li>
    )
  }
}

export { TodoItem }
