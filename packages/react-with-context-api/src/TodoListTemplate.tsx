import { TodoList } from "@ogu/react-common-jsx";
import { Todo } from "@ogu/react-common-jsx/lib/type";
import {
  todoActionType,
  useTodoContext,
  useTodoDispatchContext,
} from "./reducer";

export const TodoListTemplate = () => {
  const todos = useTodoContext();
  const dispatch = useTodoDispatchContext();

  const handleToggleTodo = (isChecked: boolean, todo: Todo) => {
    dispatch({
      type: todoActionType.TOGGLE_TODO,
      payload: todo,
    });
  };

  return <TodoList todos={todos} onCheck={handleToggleTodo} />;
};
