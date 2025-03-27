import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/storefront.css";
import ThemeProvider from "../components/ThemeProvider";
import Navbar from "./components/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
        <div className="top-0 w-full flex justify-center items-center pt-4  z-10">
          <Navbar />
        </div>
        <main className = "main-content">
          {children}</main>
      </div>
  );
}