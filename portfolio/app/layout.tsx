import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Gilbert Atché | Portfolio",
  description: "IT Analyst & Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full bg-[#1F2A44] antialiased`}
    >
      <body className="min-h-screen bg-[#1F2A44] font-[family-name:var(--font-inter)] text-white">
        {children}
      </body>
    </html>
  );
}