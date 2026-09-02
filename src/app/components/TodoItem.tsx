"use client";

import type { Todo } from "@/types/todo";
import Link from "next/link";

type TodoItemProps = { todo: Todo; onToggle: (id: number) => void; onDelete: (id: number) => void };

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return <li className={`todo-item ${todo.completed ? "completed" : ""}`}><input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} aria-label={`Tandai ${todo.title}`} /><span className="todo-title">{todo.title}</span><Link href={`/task/${todo.id}`} className="detail-link">Detail</Link><button className="delete-button" type="button" onClick={() => onDelete(todo.id)}>Hapus</button></li>;
}