import { ActionType, createAction, createReducer } from 'typesafe-actions';

const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';

let nextId = 1;
export const addTodo = createAction(ADD_TODO, (text: string) => ({
  id: nextId++,
  text,
}))();

export const toggleTodo = createAction(TOGGLE_TODO)<number>();
export const removeTodo = createAction(REMOVE_TODO)<number>();

const actions = { addTodo, toggleTodo, removeTodo };
type TodosAction = ActionType<typeof actions>;

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodosState = Todo[];

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
