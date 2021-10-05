import { PayloadAction } from '@reduxjs/toolkit'
import { UserTypes } from './types'

type User = {
  _id: string
  idGithub?: string
  name: string
  email: string
  avatar: string
}

interface AddUserProps {
  user: User
  token: string | null
  isLogged: boolean
}

export const login = (
  user: User,
  token: string
): PayloadAction<AddUserProps> => {
  return {
    type: UserTypes.LOGIN,
    payload: { user, isLogged: true, token }
  }
}
