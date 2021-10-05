import { Middleware } from '@vercel/node'
import { checkGithubToken } from './checkGithubToken'
import { getGithubUser } from './getGithubUser'

interface GetUserResolveProps {
  idGithub: number
  name: string
  bio?: string
  email?: string
  avatar: string
}

export interface WithGithubRequest {
  userGithub: GetUserResolveProps
}

const withGithub: Middleware<WithGithubRequest> = handler => {
  return async (req, res) => {
    try {
      const {
        body: { access_token: token }
      } = req

      await checkGithubToken({ token })
      const userGithub = await getGithubUser({ token })

      req.userGithub = userGithub

      return handler(req, res)
    } catch (error) {
      return res.status(400).json({ error })
    }
  }
}

export { withGithub }
