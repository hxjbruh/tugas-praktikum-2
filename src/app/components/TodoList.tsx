"use client";

import type { Todo } from "@/types/todo";
import TodoItem from "./TodoItem";

type TodoListProps = { todos: Todo[]; onToggleTodo: (id: number) => void; onDeleteTodo: (id: number) => void };

export default function TodoList({ todos, onToggleTodo, onDeleteTodo }: TodoListProps) {
  return <section className="todo-section"><div className="list-heading"><h2>Daftar Tugas</h2><span>{todos.length} tugas</span></div>{todos.length === 0 ? <p className="empty-message">Belum ada tugas.</p> : <ul className="todo-list">{todos.map((todo) => <TodoItem key={todo.id} todo={todo} onToggle={onToggleTodo} onDelete={onDeleteTodo} />)}</ul>}</section>;
}