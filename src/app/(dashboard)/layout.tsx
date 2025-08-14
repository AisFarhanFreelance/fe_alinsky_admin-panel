import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import type React from "react";

import { Header } from "@/components/sidebar/header";
import { Sidebar } from "@/components/sidebar/sidebar";
import { SidebarProvider } from "@/components/sidebar/sidebar-provider";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { error } = await supabase.auth.getUser();

  if (error) {
    redirect("/login");
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background">
        <Sidebar />
        <div className="lg:pl-72">
          <Header />
          <main className="p-4 md:p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
