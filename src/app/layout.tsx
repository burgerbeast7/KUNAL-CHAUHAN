import type { Metadata } from "next";
import { Orbitron, Sora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const orbitron = Orbitron({ 
  subsets: ["latin"], 
  variable: "--font-orbitron",
});

const sora = Sora({ 
  subsets: ["latin"], 
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Kunal Chauhan | Full-Stack Software Engineer",
  description: "Futuristic portfolio of Kunal Chauhan, a Full-Stack Software Engineer specialized in Django, React.js, and AWS.",
  keywords: ["Software Engineer", "Kunal Chauhan", "Django", "React.js", "AWS", "Full-Stack", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        orbitron.variable, 
        sora.variable, 
        "bg-background font-sora antialiased"
      )}>
        {children}
      </body>
    </html>
  );
}
