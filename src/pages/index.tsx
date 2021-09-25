import { DefaultLayout } from 'components/layouts/DefaultLayout'
import Seo from 'components/Seo'
import { TodoCard } from 'components/TodoCard'
import React, { Component } from 'react'

export default class Home extends Component {
  render(): JSX.Element {
    return (
      <DefaultLayout>
        <Seo title="Home" description="" thumb="" />
        <main>
          <div className="w-full flex flex-col items-center justify-center">
            <section className="flex flex-col">
              <TodoCard title="A fazer" todos={[{ title: 'a' }]} />
              <TodoCard title="A fazer" todos={[{ title: 'a' }]} />
              <TodoCard title="A fazer" todos={[{ title: 'a' }]} />
              <TodoCard title="A fazer" todos={[{ title: 'a' }]} />
              <TodoCard title="A fazer" todos={[{ title: 'a' }]} />
              <TodoCard title="A fazer" todos={[{ title: 'a' }]} />
            </section>
          </div>
        </main>
      </DefaultLayout>
    )
  }
}
