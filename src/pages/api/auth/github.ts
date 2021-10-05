import { Handler } from '@vercel/node'
import { connectDb } from 'lib/middlewares/connectDb'
import { withGithub, WithGithubRequest } from 'lib/middlewares/withGithub'
import { Users } from 'models/UserSchema'
import * as Yup from 'yup'

const handler: Handler<WithGithubRequest> = async (req, res) => {
  const { userGithub } = req

  let statusCode = 200
  try {
    let user = await Users.findOne({ idGithub: userGithub.idGithub })

    if (!user) {
      const data = {
        ...userGithub,
        insertedAt: new Date()
      }

      const schema = Yup.object().shape({
        avatar: Yup.string().required(),
        name: Yup.string().required(),
        idGithub: Yup.string().required(),
        insertedAt: Yup.date().required()
      })

      await schema.validate(data, { abortEarly: false })
      user = await new Users(data).save()
      console.log(user)
      statusCode = 201
    }

    return res.status(statusCode).json({
      user
    })
  } catch (err) {
    console.log(err)
    if (err.errors) {
      return res.status(400).json({
        error: 'Invalid data',
        fields: err.errors
      })
    }
    return res.status(500).json({ error: 'Internal server error' })
  }
}

export default withGithub(connectDb(handler))
