import { TodoInput } from "@ogu/react-common-jsx";
import { useContext } from "react";
import { todoActionType, useTodoDispatchContext } from "./reducer";

export const TodoInputTemplate = () => {
  const dispatch = useTodoDispatchContext();

  const handleSubmitTodo = (todoName: string) => {
    dispatch({
      type: todoActionType.ADD_TODO,
      payload: todoName,
    });
  };

  return <TodoInput onSubmit={handleSubmitTodo} />;
};
