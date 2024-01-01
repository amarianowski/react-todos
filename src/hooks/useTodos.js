import { useState, useEffect } from "react";
import axios from "axios";
import useTodosContext from "./useTodosContext";

const url = "http://localhost:3001/todos";

export default function useTodos() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { actions } = useTodosContext();

  async function getTodos() {
    setLoading(true);
    const res = await axios.get(url);

    setLoading(false);
    actions.setTodos(res.data);
  }

  async function getTodoById(id) {
    setLoading(true);
    const res = await axios.get(`${url}/${id}`);
    setLoading(false);
    return res.data;
  }

  async function deleteTodo(id) {
    setLoading(true);
    await axios.delete(`${url}/${id}`);
    setLoading(false);
    await getTodos();
  }

  async function addTodo(title) {
    setLoading(true);
    const id = Math.floor(Math.random() * 1000);
    await axios.post(url, { id, title });
    setLoading(false);
    await getTodos();
  }

  async function updateTodo(todo) {
    setLoading(true);
    await axios.put(`${url}/${todo.id}`, todo);
    setLoading(false);
    await getTodos();
  }

  async function toggleTodo(id) {
    setLoading(true);
    const todo = await getTodoById(id);
    setLoading(false);
    await updateTodo({ ...todo, completed: !todo.completed });
  }

  useEffect(() => {
    getTodos();
  }, []);

  return {
    getTodos,
    deleteTodo,
    addTodo,
    updateTodo,
    toggleTodo,
    loading,
    error,
  };
}
