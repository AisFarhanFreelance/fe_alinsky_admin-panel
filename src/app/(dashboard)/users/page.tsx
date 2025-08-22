import { getUsers } from "@/actions/user-actions";
import { UserCog } from "lucide-react";
import Link from "next/link";

import DataTable from "@/components/data-table/data-table";

import { UsersColumns } from "./components/users-columns";

const Users = async () => {
  const users = await getUsers();

  if (!users.success) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">Error Occurred</h1>
        <p className="text-muted-foreground">{users.message}</p>
      </div>
    );
  }

  const userData = (users.data ?? []).map((user) => ({
    id: user.id,
    email: user.email,
    role: user.role,
    action: (
      <Link href={`/users/${user.id}/edit`}>
        <UserCog className="h-4 w-4" />
      </Link>
    ),
  }));

  return (
    <div className="min-h-screen flex flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            Users
          </h1>
          <p className="text-muted-foreground">Manage User Account</p>
        </div>
      </div>

      <div>
        <DataTable columns={UsersColumns} data={userData} />
      </div>
    </div>
  );
};

export default Users;
