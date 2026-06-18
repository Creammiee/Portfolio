import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Timothy Jay Marquez | Full-Stack Dev · Embedded Systems · AI Engineer",
  description:
    "Full-Stack Developer, Embedded Systems Engineer, and AI Engineer specializing in web applications, AI-powered systems, computer vision, and automation solutions.",
  icons: {
    icon: "/icon.png",
  },
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
