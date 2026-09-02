"use client";

import { useState } from "react";
import type { Todo } from "@/types/todo";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodoStateOnlyApp({ initialTodos }: { initialTodos: Todo[] }) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  function handleAddTodo(title: string) {
    setTodos((current) => [{ id: Date.now(), title, completed: false, createdAt: new Date().toISOString().slice(0, 10) }, ...current]);
  }

  function handleToggleTodo(id: number) {
    setTodos((current) => current.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  }

  function handleDeleteTodo(id: number) {
    setTodos((current) => current.filter((todo) => todo.id !== id));
  }

  return <><TodoForm onAddTodo={handleAddTodo} /><TodoList todos={todos} onToggleTodo={handleToggleTodo} onDeleteTodo={handleDeleteTodo} /></>;
}