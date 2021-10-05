import { PayloadAction } from '@reduxjs/toolkit'
import { UserTypes } from './types'

type User = {
  _id: string
  idGithub?: string
  name: string
  email: string
  avatar: string
}

const initialState = {} as User

const users = (state = initialState, action: PayloadAction<any>) => {
  switch (action.type) {
    case UserTypes.LOGIN:
      return {
        users: {
          ...action.payload
        }
      }

    default:
      return state
  }
}

export { users }
