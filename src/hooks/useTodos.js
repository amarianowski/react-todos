import { useState, useEffect } from "react";
import axios from "axios";
import useTodosContext from "./useTodosContext";

const url = "http://localhost:3001/todos";

export default function useTodos() {
  const { actions } = useTodosContext();

  async function getTodos() {
    const res = await axios.get(url);
    actions.setTodos(res.data);
  }

  async function getTodoById(id) {
    const res = await axios.get(`${url}/${id}`);
    return res.data;
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

  async function toggleTodo(id) {
    const todo = await getTodoById(id);
    await updateTodo({ ...todo, completed: !todo.completed });
  }

  useEffect(() => {
    getTodos();
  }, []);

  return { getTodos, deleteTodo, addTodo, updateTodo, toggleTodo };
}
