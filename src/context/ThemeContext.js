import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

export function ThemeReducer(state, action) {
  if (action.type === "TOGGLE_THEME") {
    return { ...state, theme: state.theme === "light" ? "dark" : "light" };
  }

  return state;
}

export function ThemeContextProvider({ children }) {
  const [state, dispatch] = useReducer(ThemeReducer, { theme: "dark" });

  const actions = {
    toggleTheme: () => dispatch({ type: "TOGGLE_THEME" }),
  };

  console.log("THEME CONTEXT", state);

  return (
    <ThemeContext.Provider value={{ ...state, actions }}>
      {children}
    </ThemeContext.Provider>
  );
}
