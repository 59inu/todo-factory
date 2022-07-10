import { Todo } from "@ogu/react-common-jsx/lib/type";
import React, { createContext, useContext } from "react";

export enum todoActionType {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
}

type TodoAction =
  | { type: todoActionType.ADD_TODO; payload: string }
  | { type: todoActionType.DELETE_TODO; payload: Todo }
  | { type: todoActionType.TOGGLE_TODO; payload: Todo };

export const todoReducer = (prevState: Todo[], action: TodoAction) => {
  switch (action.type) {
    case todoActionType.ADD_TODO:
      const todo: Todo = {
        id: prevState.length,
        name: action.payload,
        isDone: false,
      };
      return [...prevState, todo];

    case todoActionType.DELETE_TODO:
      return prevState.filter((todo) => todo.id !== action.payload.id);

    case todoActionType.TOGGLE_TODO:
      return prevState.map((todo) =>
        todo.id === action.payload.id ? { ...todo, isDone: !todo.isDone } : todo
      );
  }
};

const todoContext = createContext<Todo[]>([]);
export const TodoContextProvicer = todoContext.Provider;
export const useTodoContext = () => useContext(todoContext);

const todoDispatchContext = createContext<React.Dispatch<TodoAction>>(() => {});
export const TodoDispatchContextProvider = todoDispatchContext.Provider;
export const useTodoDispatchContext = () => useContext(todoDispatchContext);
