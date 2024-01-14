import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionTypes } from './types'

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos
  payload: Todo[]
}

export interface DeleteTodoAction {
  type: ActionTypes.feleteTodo
  payload: number
}

const url = 'https://jsonplaceholder.typicode.com/todos'

export const fetchTodos = () => {
  return async (dispatch: Dispatch<FetchTodosAction>) => {
    const response = await axios.get<Todo[]>(url)

    dispatch({
      type: ActionTypes.fetchTodos,
      payload: response.data
    })
  }
}

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.feleteTodo,
    payload: id
  }
}
