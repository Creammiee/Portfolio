import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Timothy Jay Marquez | Software Engineer",
  description:
    "Software Engineer specializing in AI, Machine Learning, Embedded Systems, and Full-Stack Development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-900 via-slate-950 to-gray-900 text-slate-100 antialiased pt-16">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
