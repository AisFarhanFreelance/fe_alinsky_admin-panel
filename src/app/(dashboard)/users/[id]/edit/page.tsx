import { getPermissionsByUserId } from "@/actions/permission-actions";
import { getUserById } from "@/actions/user-actions";

import { EditUserForm } from "./components/edit-user-form";

export default async function UserEdit({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const user = await getUserById(id);

  if (!user.success) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">Error Occurred</h1>
        <p className="text-muted-foreground">{user.message}</p>
      </div>
    );
  }

  const permissions = await getPermissionsByUserId(id);

  const permissionsData = permissions.success
    ? (permissions.data?.map((perm) => String(perm.permission)) ?? [])
    : [];

  return (
    <div className="min-h-screen flex flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            Edit User
          </h1>
          <p className="text-muted-foreground">Edit User Account</p>
        </div>
      </div>

      <div>
        <EditUserForm
          id={id}
          role={user.data.role}
          permissions={permissionsData}
        />
      </div>
    </div>
  );
}
