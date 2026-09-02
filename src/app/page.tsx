import Link from "next/link";
import TodoStateOnlyApp from "./components/TodoStateOnlyApp";
import { getTodos } from "@/lib/todos";

export default async function Home() {
  const initialTodos = await getTodos();

  return (
    <main className="page-container">
      <header className="site-header">
        <Link href="/" className="site-title">Todo App</Link>
        <nav><Link href="/login">Login</Link><Link href="/register">Register</Link></nav>
      </header>
      <section className="page-heading">
        <h1>Daftar Tugas</h1>
        <p>Kelola tugas Anda dengan mudah.</p>
      </section>
      <TodoStateOnlyApp initialTodos={initialTodos} />
    </main>
  );
}