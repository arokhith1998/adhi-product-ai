import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adhithya Rokhith Bhaskar - Product Marketing & AI Leader",
  description:
    "Product Marketing & AI Leader — GTM, positioning, and AI-powered products. Anthropic certified.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans">
        {children}
        {/* tw-safelist */}
        <span className="hidden bg-rose-500/10 border-rose-500/40 border-rose-500/30 text-rose-300 text-rose-200 bg-rose-400" aria-hidden />
        <Analytics />
      </body>
    </html>
  );
}
