import type { Metadata, Viewport } from "next";
import { Orbitron, Sora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const orbitron = Orbitron({ 
  subsets: ["latin"], 
  variable: "--font-orbitron",
  display: "swap",
});

const sora = Sora({ 
  subsets: ["latin"], 
  variable: "--font-sora",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Kunal Chauhan | Full-Stack Software Engineer",
  description: "Portfolio of Kunal Chauhan — Full-Stack Software Engineer specialized in Django, React.js, AWS, and AI/ML. Building intelligent, scalable systems.",
  keywords: ["Software Engineer", "Kunal Chauhan", "Django", "React.js", "AWS", "Full-Stack", "Portfolio", "Python", "Node.js", "MongoDB"],
  authors: [{ name: "Kunal Chauhan" }],
  openGraph: {
    title: "Kunal Chauhan | Full-Stack Software Engineer",
    description: "Full-Stack Software Engineer specialized in Django, React.js, AWS, and AI/ML.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
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
