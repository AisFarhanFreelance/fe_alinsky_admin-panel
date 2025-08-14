import { SquarePen } from "lucide-react";

import DataTable from "@/components/data-table/data-table";

import { TutorialsColums } from "./components/lead-capture-columns";

const LeadCapture = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            Tutorials
          </h1>
          <p className="text-muted-foreground">Manage Tutorials</p>
        </div>
      </div>

      <div>
        <DataTable columns={TutorialsColums} data={tutorialsData} />
      </div>
    </div>
  );
};

export default LeadCapture;

const tutorialsData = [
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
