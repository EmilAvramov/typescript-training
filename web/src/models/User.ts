import { userServerUrl } from '../config/constants'
import { UserProps } from '../types/interfaces'
import { ApiSync } from './ApiSync'
import { Attributes } from './Attributes'
import { Collection } from './Collection'
import { EventMap } from './Event'
import { Model } from './Model'

export class User extends Model<UserProps> {
  static create(data: UserProps): User {
    return new User(
      new Attributes<UserProps>(data),
      new EventMap(),
      new ApiSync<UserProps>(userServerUrl)
    )
  }

  static createUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(userServerUrl, (json: UserProps) =>
      User.create(json)
    )
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100)
    this.set({ age })
  }
}
