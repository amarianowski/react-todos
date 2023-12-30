import { useState, useEffect } from "react";
import axios from "axios";

const url = "http://localhost:3001/todos";

export default function useTodos() {
  const [todos, setTodos] = useState([]);

  async function getTodos() {
    const res = await axios.get(url);
    setTodos(res.data);
  }

  async function deleteTodo(id) {
    await axios.delete(`${url}/${id}`);
    await getTodos();
  }

  async function addTodo(title) {
    const id = Math.floor(Math.random() * 1000);
    await axios.post(url, { id, title });
    await getTodos();
  }

  async function updateTodo(todo) {
    await axios.put(`${url}/${todo.id}`, todo);
    await getTodos();
  }

  useEffect(() => {
    getTodos();
  }, []);

  return { todos, getTodos, deleteTodo, addTodo, updateTodo };
}
