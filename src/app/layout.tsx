import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Chat App",
  description: "Next generation AI-powered chat application",
  authors: [{ name: "Kshitij Kumar Yadav", url: "https://www.linkedin.com/in/kshitij-kumar-yadav-71a695289/" }],
  creator: "Kshitij Kumar Yadav",
  keywords: [
    "Java",
    "MERN",
    "MongoDB",
    "Express",
    "React",
    "Node.js",
    "SQL",
    "DSA",
    "Operating Systems",
    "Computer Networks",
    "Theory of Computation",
    "Web Technologies",
    "AI/ML basics",
    "Blockchain",
  ],
  openGraph: {
    title: "AI Chat App",
    description: "Next generation AI-powered chat application",
    type: "website",
    url: "https://www.linkedin.com/in/kshitij-kumar-yadav-71a695289/",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Chat App",
    description: "Next generation AI-powered chat application",
    creator: "@EventHorizonKY",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} bg-dark text-white`}>
        <Toaster richColors position="bottom-right" />
        {children}
      </body>
    </html>
  );
}
