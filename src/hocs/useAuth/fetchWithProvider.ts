/* eslint-disable camelcase */
import api from 'services/api'
import Cookies from 'js-cookie'
export type Provider = 'Github' | 'Password-based'
export type Credentials = {
  email: string
  password: string
}

type User = {
  _id: string
  idGithub?: string
  name: string
  email: string
  avatar: string
}

interface AuthUserData {
  data: {
    user: User
    token: string
  }
}

interface FetchWithProviderProps {
  token: string
  provider: Provider
  credentials?: Credentials
}

async function fetchWithProvider({
  token,
  provider,
  credentials
}: FetchWithProviderProps) {
  let user: User
  let access_token: string | null

  const fetchers = {
    async Github() {
      const { data } = await api.post<any, AuthUserData>('/auth/github', {
        access_token: token
      })
      user = data.user
      access_token = data.token
    },
    async 'Password-based'() {
      const { data } = await api.post<any, AuthUserData>('/auth', {
        ...credentials
      })
      user = data.user
      access_token = data.token
    }
  }

  const providerFetch = fetchers[provider]

  Cookies.set('access_token', access_token)
  await providerFetch()

  return { user, access_token }
}

export { fetchWithProvider }
