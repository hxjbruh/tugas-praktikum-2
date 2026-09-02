import type { Todo } from "@/types/todo";

const todos: Todo[] = [
  { id: 1, title: "Pelajari React Server Components", completed: true, createdAt: "2026-09-01" },
  { id: 2, title: "Membuat komponen TodoList", completed: false, createdAt: "2026-09-02" },
  { id: 3, title: "Menyelesaikan praktikum Next.js", completed: false, createdAt: "2026-09-02" },
];

export async function getTodos(): Promise<Todo[]> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return todos;
}

export function getTodoById(id: number) {
  return todos.find((todo) => todo.id === id);
}