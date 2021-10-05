import React from 'react'
import Seo from 'components/Seo'
import { DefaultLayout } from 'components/layouts/DefaultLayout'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { GithubLoading } from 'components/Loadings/Github'
import styles from 'styles/pages/callback/github.module.css'
import { useAuth } from 'hocs/useAuth'

interface GithubCallbackProps {
  token: string
}

export default function GithubCallback({ token }: GithubCallbackProps) {
  useAuth({ token, redirectOnFail: '/login', provider: 'Github' })
  return (
    <DefaultLayout>
      <Seo title="Github | Callback" description="" thumb="" />
      <main>
        <div className={styles.container}>
          <GithubLoading />
        </div>
      </main>
    </DefaultLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { code } = query

  try {
    const { data } = await axios.post<any>(
      'https://github.com/login/oauth/access_token',
      {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code
      }
    )

    const token = data.split('=')[1].split('&')[0]

    return {
      props: { token }
    }
  } catch (err) {
    return {
      redirect: {
        destination: '/login?githubBadRequest=true',
        permanent: false
      }
    }
  }
}
