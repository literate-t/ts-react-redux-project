import { createReducer } from 'typesafe-actions';
import { addTodo, removeTodo, toggleTodo } from './actions';
import { TodosAction, TodosState } from './types';
const initialState: TodosState = [];

const todos = createReducer<TodosState, TodosAction>(initialState)
  .handleAction(addTodo, (state, action) =>
    state.concat({
      ...action.payload,
      done: false,
    })
  )
  .handleAction(toggleTodo, (state, action) =>
    state.map((todo) =>
      todo.id === action.payload ? { ...todo, done: !todo.done } : todo
    )
  )
  .handleAction(removeTodo, (state, action) =>
    state.filter((todo) => todo.id !== action.payload)
  );

export default todos;
