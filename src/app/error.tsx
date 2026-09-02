"use client";

export default function Error({ reset }: { reset: () => void }) {
  return <main className="page-container"><section className="message-box"><h1>Terjadi kesalahan</h1><p>Data tugas tidak dapat dimuat.</p><button className="button" onClick={() => reset()}>Coba lagi</button></section></main>;
}