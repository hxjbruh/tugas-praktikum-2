"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function RegisterForm() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitted(true); }
  return <main className="auth-container"><section className="auth-box"><Link href="/" className="site-title">Todo App</Link><h1>Register</h1><p>Buat akun baru untuk melanjutkan.</p><form className="auth-form" onSubmit={handleSubmit}><label>Nama<input type="text" required placeholder="Nama lengkap" /></label><label>Email<input type="email" required placeholder="nama@email.com" /></label><label>Password<input type="password" required minLength={8} placeholder="Minimal 8 karakter" /></label><button className="button" type="submit">Register</button>{submitted && <p className="success-message">Registrasi berhasil.</p>}</form><p>Sudah punya akun? <Link href="/login">Login</Link></p></section></main>;
}