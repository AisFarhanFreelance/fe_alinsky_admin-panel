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
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  let role = "user";
  let permissions = [];

  const { data: userTable } = await supabase
    .from("users")
    .select("role")
    .eq("id", user.id)
    .single();

  role = userTable?.role || "user";

  const { data: permissionTable } = await supabase
    .from("user_permissions")
    .select("permission")
    .eq("user_id", user.id);

  permissions = permissionTable?.map((item) => item.permission) || [];

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background">
        <Sidebar role={role} permissions={permissions} />
        <div className="lg:pl-72">
          <Header />
          <main className="p-4 md:p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
