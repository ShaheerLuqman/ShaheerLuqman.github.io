import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "react-photo-view/dist/react-photo-view.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Shaheer Luqman | Applied Research Engineer",
  description:
    "Applied Research Engineer at Retrocausal specializing in Computer Vision, AI Systems, and Full-Stack development. ICPC Gold Medalist & IEEE Published Researcher. CGPA 3.90/4.00 FAST NUCES.",
  keywords: ["Applied Research Engineer", "Computer Vision", "AI Systems", "Competitive Programming", "ICPC", "PyTorch", "Retrocausal", "IEEE"],
  authors: [{ name: "Muhammad Shaheer Luqman" }],
  openGraph: {
    title: "Muhammad Shaheer Luqman | Applied Research Engineer",
    description: "Applied Research Engineer specializing in Computer Vision, AI Systems, and production-grade full-stack development.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
