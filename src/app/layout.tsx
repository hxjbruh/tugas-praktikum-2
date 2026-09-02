import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tugas 1 Frontend",
  description: "Frontend Next.js untuk Tugas 1.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}
