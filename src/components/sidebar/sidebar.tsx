"use client";

import { cn } from "@/lib/utils";
import { BookUser, LayoutDashboard, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

import { useSidebar } from "./sidebar-provider";

interface SidebarProps {
  role: string;
  permissions: string[];
}

export function Sidebar({ role, permissions }: SidebarProps) {
  const pathname = usePathname();
  const { isOpen, toggle } = useSidebar();

  const filteredNavItems =
    role === "admin"
      ? navItems
      : navItems.filter(
          (item) => !item.permissions || permissions.includes(item.permissions),
        );

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden",
          isOpen ? "block" : "hidden",
        )}
        onClick={toggle}
      />
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 bg-background",
          "transition-transform duration-300 ease-in-out",
          "border-r",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0",
        )}
      >
        <div className="flex h-14 items-center border-b px-4">
          <span className="text-lg font-semibold">Alinsky Admin</span>
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto lg:hidden"
            onClick={toggle}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex flex-col h-[calc(100vh-3.5rem)]">
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid gap-1 px-2">
              {filteredNavItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === item.href
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  {
    name: "Lead Capture",
    href: "/lead-capture",
    icon: BookUser,
    permissions: "show-lead-capture",
  },
];
