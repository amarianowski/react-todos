import { createContext, useReducer } from "react";

export const TodosContext = createContext();

export function TodosReducer(state, action) {
  if (action.type === "SET_TODOS") {
    return { ...state, todos: action.payload };
  }
  if (action.type === "ADD_TODO") {
    return { ...state, todos: [...state.todos, action.payload] };
  }

  if (action.type === "DELETE_TODO") {
    return {
      ...state,
      todos: state.todos.filter((todo) => todo.id !== action.payload),
    };
  }

  if (action.type === "UPDATE_TODO") {
    return {
      ...state,
      todos: state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      }),
    };
  }

  return state;
}

export function TodosContextProvider({ children }) {
  const [state, dispatch] = useReducer(TodosReducer, { todos: [] });

  const actions = {
    setTodos: (todos) => dispatch({ type: "SET_TODOS", payload: todos }),
    addTodo: (todo) => dispatch({ type: "ADD_TODO", payload: todo }),
    deleteTodo: (id) => dispatch({ type: "DELETE_TODO", payload: id }),
    updateTodo: (todo) => dispatch({ type: "UPDATE_TODO", payload: todo }),
  };

  console.log("TODOS CONTEXT", state);

  return (
    <TodosContext.Provider value={{ ...state, actions }}>
      {children}
    </TodosContext.Provider>
  );
}
