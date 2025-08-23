"use client";

import { ColumnDef } from "@tanstack/react-table";

export type LeadCaptures = {
  id: string;
  brandName: string;
  email: string;
  phone: string;
  social: string;
};

export const LeadCapturesColumns: ColumnDef<LeadCaptures>[] = [
  {
    accessorKey: "brandName",
    header: "Brand Name",
    cell: ({ row }) => (
      <span className="font-medium">{row.getValue("brandName")}</span>
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
];
