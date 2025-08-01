"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { ReactNode } from "react";

import { Button } from "@/components/ui/button";

export type Users = {
  id: string;
  name: string;
  email: string;
  phone: string;
  social: string;
  action: ReactNode;
};

export const UsersColumns: ColumnDef<Users>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <span className="font-medium">{row.getValue("name")}</span>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
  },
  {
    accessorKey: "social",
    header: "Social Media/URL",
    cell: ({ row }) => (
      <a
        href={row.getValue("social")}
        target="_blank"
        rel="noopener noreferrer"
      >
        {row.getValue("social")}
      </a>
    ),
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
