import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { FloatingBottomNav } from "@/components/FloatingBottomNav";
import { Footer } from "@/components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paul Larkin",
  description: "Personal website for Paul Larkin. Designer Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <FloatingBottomNav />
        <Footer />
      </body>
    </html>
  );
}
