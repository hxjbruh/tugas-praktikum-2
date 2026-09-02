"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function LoginForm() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitted(true); }
  return <main className="auth-container"><section className="auth-box"><Link href="/" className="site-title">Todo App</Link><h1>Login</h1><p>Masuk ke akun Anda.</p><form className="auth-form" onSubmit={handleSubmit}><label>Email<input type="email" required placeholder="nama@email.com" /></label><label>Password<input type="password" required placeholder="Password" /></label><button className="button" type="submit">Login</button>{submitted && <p className="success-message">Login berhasil.</p>}</form><p>Belum punya akun? <Link href="/register">Register</Link></p></section></main>;
}