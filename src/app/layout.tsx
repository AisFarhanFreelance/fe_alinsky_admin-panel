import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";

import { SidebarProvider } from "@/components/sidebar/sidebar-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sambo Admin Dashboard",
  description: "Admin dashboard for Sambo wallet management",
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
      </body>
    </html>
  );
}
