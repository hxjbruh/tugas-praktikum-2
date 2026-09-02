"use client";

import { FormEvent, useState } from "react";

type TodoFormProps = { onAddTodo: (title: string) => void };

export default function TodoForm({ onAddTodo }: TodoFormProps) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;
    onAddTodo(trimmedTitle);
    setTitle("");
  }

  return <form className="todo-form" onSubmit={handleSubmit}><input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Tambahkan tugas baru..." aria-label="Judul tugas baru" /><button className="button" type="submit" disabled={!title.trim()}>Tambah</button></form>;
}