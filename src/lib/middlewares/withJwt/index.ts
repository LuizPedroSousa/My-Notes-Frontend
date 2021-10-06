import { Middleware } from '@vercel/node'
import { Decoded } from 'jsonwebtoken'
import { checkSignature } from 'lib/jwt'
import { checkFormatting } from './format'

export interface WithJWTRequest<T = {}> {
  decoded: Decoded<T>
}

const withJWT: Middleware<WithJWTRequest> = handler => {
  return async (req, res) => {
    try {
      const {
        headers: { authorization }
      } = req

      const { token } = checkFormatting({ authorization })
      const { decoded } = checkSignature({ token })

      req.decoded = decoded

      return handler(req, res)
    } catch (error) {
      return res.status(400).json({ error })
    }
  }
}

export { withJWT }
