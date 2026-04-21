import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Norican } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

const norican = Norican({
  weight: "400",
  variable: "--font-norican",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saurabh Kaushik - Professional Vastu Consultant",
  description: "Expert Vastu Consultant in Delhi NCR with 5+ years of experience. Specialized in Residential, Commercial, and Industrial Vastu solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${norican.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
