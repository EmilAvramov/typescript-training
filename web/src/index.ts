import { UserList } from './views/UserList'
import { Collection } from './models/Collection'
import { type UserProps } from './types/interfaces'
import { userServerUrl } from './config/constants'
import { User } from './models/User'

const users = new Collection(userServerUrl, (json: UserProps) =>
  User.create(json)
)

users.on('change', () => {
  const root = document.getElementById('root')

  if (root) {
    new UserList(root, users).render()
  } else {
    throw new Error('No root found')
  }
})

users.fetch()
