import React, { useEffect } from 'react'
import { DefaultLayout } from 'components/layouts/DefaultLayout'
import Seo from 'components/Seo'
import Todos from 'components/Todos'

import { GetServerSideProps } from 'next'
import { withAuthSSR } from 'lib/middlewares/withAuthSSR'
import api from 'services/api'
import { useDispatch } from 'react-redux'
import { login } from 'store/ducks/users/actions'
import styles from 'styles/pages/home.module.css'
import { deleteCookieSSR } from 'utils/cookies'

type User = {
  _id: string
  idGithub?: string
  name: string
  email: string
  avatar: string
}

interface HomeProps {
  user?: User
  token?: string
}

export default function Home({ user, token }: HomeProps) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(login(user, token))
  }, [])

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

export const getServerSideProps: GetServerSideProps = withAuthSSR(async ctx => {
  const token = ctx.req.cookies.access_token
  if (ctx.req.cookies.isFirstLogin) {
    deleteCookieSSR('isFirstLogin', ctx)
    return { props: { token } }
  }

  const { data } = await api.get<any>('/users/show', {
    headers: { authorization: `Bearer ${token}` }
  })
  return {
    props: { user: data.user, token }
  }
})
