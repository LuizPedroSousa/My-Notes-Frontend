import { Schema, Document, Model, models, model } from 'mongoose'

interface UserProps extends Document {
  _id: string
  name: string
  idGithub?: number
  email: string
  avatar: string
  todosList: { todo_list_id: string }[]
  bio?: string
  insertedAt: Date
}

const UserSchema = new Schema<UserProps>({
  avatar: {
    type: String
  },
  idGithub: {
    type: Number,
    required: false
  },
  name: {
    type: String
  },
  email: {
    type: String,
    required: false
  },
  bio: {
    type: String,
    required: false
  },
  insertedAt: {
    type: Date,
    default: new Date()
  },
  todosList: {
    type: [{ todo_list_id: Schema.Types.ObjectId }],
    required: false
  }
})

const Users: Model<UserProps> = models.users || model('users', UserSchema)

export { Users }
