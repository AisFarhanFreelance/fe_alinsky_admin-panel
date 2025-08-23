import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import { Toaster } from "sonner";

import { SidebarProvider } from "@/components/sidebar/sidebar-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alinsky Admin Dashboard",
  description: "Admin dashboard for Alinsky",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>{children}</SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
