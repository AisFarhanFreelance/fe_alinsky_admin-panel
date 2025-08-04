"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { ReactNode } from "react";

import { Button } from "@/components/ui/button";

export type Blogs = {
  id: string;
  title: string;
  subtitle: string;
  action: ReactNode;
};

export const BlogsColums: ColumnDef<Blogs>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <span className="font-medium">{row.getValue("title")}</span>
    ),
  },
  {
    accessorKey: "subtitle",
    header: "Subtitle",
  },
  {
    accessorKey: "action",
    header: "Actions",
    cell: ({ row }) => (
      <Button variant="outline">
        <Link href="#">
          {row.getValue("action")}
          <span className="sr-only">Edit Blog</span>
        </Link>
      </Button>
    ),
  },
];
