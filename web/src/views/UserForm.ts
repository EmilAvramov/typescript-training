import { User } from "../models/User"
import { type UserProps } from "../types/interfaces"
import { View } from "./View"

export class UserForm extends View<User, UserProps> {
  eventMap(): { [key: string]: () => void } {
    return {
      'click:.set-name': this.onSetName,
      'click:.set-age': this.onSetAgeClick,
      'click:.save-model': this.onSaveClick
    }
  }

  onSaveClick = (): void => {
    this.model.save()
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge()
  }

  onSetName = (): void => {
    const input = this.parent.querySelector('input')

    if (input) {
      const name = input.value
      this.model.set({ name })
    }
  }

  template(): string {
    return `
    <div>
      <input placeholder=${this.model.get('name')}>
      <button class="set-name">Change Name</button>
      <button class="set-age">Set Random Age</button>
      <button class="save-model">Save User</button>
    </div>
    `
  }
}
