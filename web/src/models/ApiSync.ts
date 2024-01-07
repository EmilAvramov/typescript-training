import axios, { type AxiosPromise } from 'axios'
import { WithID } from '../types/interfaces'

export class ApiSync<T extends WithID> {
  constructor(public rootUrl: string) {}

  fetch = (id: number): AxiosPromise<T> => {
    return axios.get(`${this.rootUrl}/${id}`)
  }

  save = (data: T): AxiosPromise<T> => {
    if (data.id) {
      return axios.put(`${this.rootUrl}/${data.id}`, data)
    }

    return axios.post(`${this.rootUrl}`, data)
  }
}
