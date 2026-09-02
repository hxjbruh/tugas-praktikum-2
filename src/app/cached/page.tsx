import TodoCachedApp from "./components/TodoCachedApp";
import { getTodos } from "@/lib/todos";

export default async function CachedTodoPage() {
  const initialTodos = await getTodos();

  return <main className="page-container">
    <header className="site-header">
      <span className="site-title">Todo App - Local Storage</span>
    </header>
    <section className="page-heading">
      <h1>Daftar Tugas Tersimpan</h1>
      <p>Data tetap tersimpan setelah halaman di-refresh.</p>
    </section>
    <TodoCachedApp initialTodos={initialTodos} />
  </main>;
}
