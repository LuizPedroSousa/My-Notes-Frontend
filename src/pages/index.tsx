import { DefaultLayout } from 'components/layouts/DefaultLayout'
import Seo from 'components/Seo'
import { TodoListCard } from 'components/TodoListCard'
import React, { Component } from 'react'

export default class Home extends Component {
  render(): JSX.Element {
    return (
      <DefaultLayout>
        <Seo title="Home" description="" thumb="" />
        <main>
          <div className="w-full flex flex-col items-center justify-center">
            <section className="flex flex-col">
              <TodoListCard
                title="A fazer"
                todos={[
                  { title: 'a', hasChecked: false, id: '', description: '' }
                ]}
              />
              <TodoListCard
                title="A fazer"
                todos={[
                  { title: 'a', hasChecked: false, id: '', description: '' }
                ]}
              />
              <TodoListCard
                title="A fazer"
                todos={[
                  { title: 'a', hasChecked: false, id: '', description: '' }
                ]}
              />
              <TodoListCard
                title="A fazer"
                todos={[
                  { title: 'a', hasChecked: false, id: '', description: '' }
                ]}
              />
              <TodoListCard
                title="A fazer"
                todos={[
                  { title: 'a', hasChecked: false, id: '', description: '' }
                ]}
              />
              <TodoListCard
                title="A fazer"
                todos={[
                  { title: 'a', hasChecked: false, id: '', description: '' }
                ]}
              />
            </section>
          </div>
        </main>
      </DefaultLayout>
    )
  }
}
