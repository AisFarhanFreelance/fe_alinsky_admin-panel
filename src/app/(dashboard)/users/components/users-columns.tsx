"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { ReactNode } from "react";

import { Button } from "@/components/ui/button";

export type Users = {
  id: string;
  email: string;
  role: string;
  action: ReactNode;
};

export const UsersColumns: ColumnDef<Users>[] = [
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "action",
    header: "Actions",
    cell: ({ row }) => (
      <Button variant="outline">
        <Link href="#">
          {row.getValue("action")}
          <span className="sr-only">Edit User</span>
        </Link>
      </Button>
    ),
  },
];
