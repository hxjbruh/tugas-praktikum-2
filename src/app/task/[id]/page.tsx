import Link from "next/link";
import { getTodoById } from "@/lib/todos";

export default async function TaskDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const todo = getTodoById(Number((await params).id));
  if (!todo) return <main className="page-container"><section className="message-box"><h1>Tugas tidak ditemukan</h1><Link href="/" className="button">Kembali ke daftar</Link></section></main>;
  return <main className="page-container"><section className="detail-box"><Link href="/">← Kembali</Link><h1>{todo.title}</h1><p>Status: {todo.completed ? "Selesai" : "Belum selesai"}</p><p>Dibuat pada: {todo.createdAt}</p></section></main>;
}