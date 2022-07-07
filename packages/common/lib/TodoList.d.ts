import { FC } from "react";
import { Todo } from "./type";
interface TodoListProps {
    todos: Todo[];
    onCheck: (isChecked: any, todo: Todo) => void;
}
export declare const TodoList: FC<TodoListProps>;
export {};
