"use client";

import { useState } from "react";
import type { Todo } from "@/types/todo";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import TodoForm from "@/app/components/TodoForm";
import TodoList from "@/app/components/TodoList";

const CACHE_KEY = "TODO_LIST_CACHE";

type TodoCachedAppProps = {
  initialTodos: Todo[];
};

export default function TodoCachedApp({ initialTodos }: TodoCachedAppProps) {
  const [todos, setTodos] = useLocalStorage<Todo[]>(CACHE_KEY, initialTodos);
  const [resetMessage, setResetMessage] = useState("");

  function handleAddTodo(title: string) {
    setTodos((current) => [{
      id: Date.now(),
      title,
      completed: false,
      createdAt: new Date().toISOString().slice(0, 10),
    }, ...current]);
    setResetMessage("");
  }

  function handleToggleTodo(id: number) {
    setTodos((current) => current.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  }

  function handleDeleteTodo(id: number) {
    setTodos((current) => current.filter((todo) => todo.id !== id));
  }

  function handleResetToDefault() {
    setTodos(initialTodos);
    setResetMessage("Data dikembalikan ke daftar awal.");
  }

  return <>
    <TodoForm onAddTodo={handleAddTodo} />
    <div className="cache-status"><span>Cache aktif: localStorage ({CACHE_KEY})</span><button type="button" onClick={handleResetToDefault}>Reset ke Data Awal</button></div>
    {resetMessage && <p className="success-message">{resetMessage}</p>}
    <TodoList todos={todos} onToggleTodo={handleToggleTodo} onDeleteTodo={handleDeleteTodo} />
  </>;
}
