import { Handler } from '@vercel/node'
import { connectDb } from 'lib/middlewares/connectDb'
import { withJWT, WithJWTRequest } from 'lib/middlewares/withJwt'
import { Users } from 'models/UserSchema'

interface UserDecoded {
  _id: string
}

const handler: Handler<WithJWTRequest<UserDecoded>> = async (req, res) => {
  const {
    decoded: { _id }
  } = req

  const user = await Users.findOne({ _id })

  if (!user) {
    return res.status(400).json({
      error: 'User not found'
    })
  }

  return res.status(201).json({
    user
  })
}

export default withJWT(connectDb(handler))
