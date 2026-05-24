import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NovaLearn Dashboard",
  description: "A futuristic student dashboard prototype powered by Supabase and Framer Motion."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
