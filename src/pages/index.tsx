import React, { Component } from 'react'
import { DefaultLayout } from 'components/layouts/DefaultLayout'
import Seo from 'components/Seo'
import Todos from 'components/Todos'

import styles from 'styles/pages/home.module.css'
import { GetServerSideProps } from 'next'
import { withAuthSSR } from 'lib/middlewares/withAuthSSR'
import api from 'services/api'

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

interface State {
  todoList: TodoList[]
}

export default class Home extends Component<any, State> {
  render(): JSX.Element {
    return (
      <DefaultLayout>
        <Seo title="Home" description="" thumb="" />
        <main>
          <div className={styles.container}>
            <Todos />
          </div>
        </main>
      </DefaultLayout>
    )
  }
}

export const getServerSideProps: GetServerSideProps = withAuthSSR(
  async ({ req, res }) => {
    try {
    } catch (err) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      }
    }
  }
)
