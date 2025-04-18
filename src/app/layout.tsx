import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import RadioHeader from "@/components/layouts/RadioHeader";
import ReactQueryProvider from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podcast Platform",
  description: "Listen to your favorite podcasts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <Header />
          <RadioHeader />
          {children}
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
