import { useReducer } from "react";
import { ErrorBoundary } from "@ogu/react-common-jsx";
import {
  TodoContextProvicer,
  TodoDispatchContextProvider,
  todoReducer,
} from "./reducer";
import { TodoInputTemplate } from "./TodoInputTemplate";
import { TodoListTemplate } from "./TodoListTemplate";

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <ErrorBoundary>
      <TodoDispatchContextProvider value={dispatch}>
        <TodoContextProvicer value={todos}>
          <TodoInputTemplate />
          <TodoListTemplate />
        </TodoContextProvicer>
      </TodoDispatchContextProvider>
    </ErrorBoundary>
  );
}

export default App;
