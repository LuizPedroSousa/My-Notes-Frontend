/* eslint-disable camelcase */
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { toast } from 'react-toastify'
import { getToastStyle } from 'utils/getToastStyle'
import { useDispatch } from 'react-redux'
import { login } from 'store/ducks/users/actions'
import { Credentials, fetchWithProvider, Provider } from './fetchWithProvider'

interface UserAuthProps {
  token?: string
  redirectOnFail: string
  redirectOnSuccess?: string
  provider: Provider
  credentials?: Credentials
}

function useAuth({
  token,
  redirectOnFail,
  redirectOnSuccess,
  credentials,
  provider
}: UserAuthProps) {
  const router = useRouter()
  const dispatch = useDispatch()

  async function authenticate() {
    try {
      const { user, access_token } = await fetchWithProvider({
        token,
        provider,
        credentials
      })
      dispatch(login(user, access_token))
      toast.success('Sucesso ao autenticar 🎉', {
        ...getToastStyle({ style: 'success' })
      })
      router.push(redirectOnSuccess || '/')
    } catch (err) {
      router.push(redirectOnFail)
      toast.error('Falha ao realizar login', {
        ...getToastStyle({ style: 'error' })
      })
    }
  }

  useEffect(() => {
    authenticate()
  }, [])
}

export { useAuth }
