import { FilePlus2, SquarePen } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import DataTable from "@/components/data-table/data-table";

import { BlogsColums } from "./components/blogs-columns";

const Users = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            Blogs
          </h1>
          <p className="text-muted-foreground">Manage Blog Posts</p>
        </div>
        <Link href="/blogs/add">
          <Button>
            <FilePlus2 className="mr-2 h-4 w-4" />
            Add Blog
          </Button>
        </Link>
      </div>

      <div>
        <DataTable columns={BlogsColums} data={blogs} />
      </div>
    </div>
  );
};

export default Users;

const blogs = [
  {
    id: "3e1d4553-b801-40c1-a97b-52a4e649a324",
    title: "Understanding React Components",
    subtitle: "A Deep Dive into Functional and Class Components",
    action: <SquarePen className="h-4 w-4" />,
  },
  {
    id: "3e1d4553-b801-40c1-a97b-52a4e649a324",
    title: "Understanding React Components",
    subtitle: "A Deep Dive into Functional and Class Components",
    action: <SquarePen className="h-4 w-4" />,
  },
];
