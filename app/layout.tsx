import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import {AuthProvider} from "@/context/authContext";
import Navbar from "@/app/components/rootComponent/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quiz AI",
  description: "A Platform for Quiz practice",
    icons: {
      icon:"/logo.jpg",
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`}
      >
      <AuthProvider>
          <Navbar/>
        {children}
      </AuthProvider>
      </body>
    </html>
  );
}
