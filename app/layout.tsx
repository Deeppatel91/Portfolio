import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import TitleChanger from "@/components/Functions/TitleChanger";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deep Patel",
  description: "Deep Patel's portfolio",
  icons: {
    icon: '../app/favicon.ico', // Path relative to public directory
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TitleChanger />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}