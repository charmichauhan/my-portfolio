import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "@/contexts/DarkModeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Charmi Chauhan | MEAN/MERN Stack Developer",
  description:
    "Explore the portfolio of Charmi Chauhan, a full-stack developer specializing in MEAN and MERN stack applications, projects, and modern web technologies.",
  keywords: [
    "Charmi Chauhan",
    "full-stack developer",
    "MEAN stack developer",
    "MERN stack developer",
    "web developer",
    "React",
    "Angular",
    "Node.js",
    "MySQL",
  ],
  authors: [{ name: "Charmi Chauhan" }],
  creator: "Charmi Chauhan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Charmi Chauhan | MEAN/MERN Stack Developer",
    description:
      "Full-stack developer portfolio featuring MEAN/MERN projects, technical skills, and experience.",
    siteName: "Charmi Chauhan Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Charmi Chauhan | MEAN/MERN Stack Developer",
    description:
      "Full-stack developer portfolio featuring MEAN/MERN projects, technical skills, and experience.",
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DarkModeProvider>
          {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}
