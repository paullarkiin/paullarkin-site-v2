import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ViewTransition } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";
import { FloatingBottomNav } from "@/components/FloatingBottomNav";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
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
      className={`${manrope.variable} h-full scheme-light-dark antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-text">
        <ViewTransition>{children}</ViewTransition>
        <Footer />
        <FloatingBottomNav />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
