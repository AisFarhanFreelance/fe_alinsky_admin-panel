import { UserCog } from "lucide-react";

import DataTable from "@/components/data-table/data-table";

import { UsersColumns } from "./components/users-columns";

const Users = () => {
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
        <DataTable columns={UsersColumns} data={users} />
      </div>
    </div>
  );
};

export default Users;

const users = [
  {
    id: "3e1d4553-b801-40c1-a97b-52a4e649a324",
    email: "aldo.pratama@example.com",
    role: "Admin",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "f6f7414f-60a3-4b13-b9b4-8a028dbce6c3",
    email: "dina.kusuma@example.com",
    role: "Admin",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "fc9e53e2-2b9a-42c9-885b-6f0c7b60b281",
    email: "rama.wijaya@example.com",
    role: "Admin",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "9b19a5a2-3e3c-4d2f-9a3e-46bd351733e3",
    email: "sari.oktaviani@example.com",
    role: "Admin",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "132223fd-553c-47a6-9a5b-291cfb981c62",
    email: "budi.santoso@example.com",
    role: "Admin",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "d39e9c5a-3e86-456e-9406-f1537d9978e6",
    email: "nina.azzahra@example.com",
    role: "Admin",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "0cf57d85-3cc2-4f8b-b07e-e04aef5d7981",
    email: "yusuf.maulana@example.com",
    role: "Admin",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "e4e98db9-7691-4df8-b09b-90e60d6b5296",
    email: "clara.tania@example.com",
    role: "Admin",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "b861ce5a-cf6f-4322-85f4-f99e14666bc4",
    email: "hendra.saputra@example.com",
    role: "Admin",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "fa46d52c-68fd-4cb1-bc04-5984ef33ac7d",
    email: "melati.dewi@example.com",
    role: "Admin",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "c7b133e6-3a60-4f41-b1d3-55e6c5b4a017",
    email: "aditya.rinaldi@example.com",
    role: "Admin",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "de2e7164-15a2-4cb6-bd1e-17464552ae51",
    email: "rika.permata@example.com",
    role: "Admin",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "75d7bafe-456a-4d39-a0a3-bb40bfe40ab6",
    email: "galih.nugroho@example.com",
    role: "Admin",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "dd4c545f-8453-4f43-a5c2-837d2f98fd96",
    email: "tania.marlina@example.com",
    role: "Admin",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "9d8be7a1-7437-4dd6-9177-658ec265101e",
    email: "fikri.ramadhan@example.com",
    role: "Admin",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "6cd96139-b949-4261-a118-cab46bb2d0e9",
    email: "laras.puspita@example.com",
    role: "Admin",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "fd1ebce0-90df-4087-b144-c73281a867f7",
    email: "reza.oktavian@example.com",
    role: "Admin",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "0e7b5d44-d118-47d6-803b-7905f7f3004e",
    email: "citra.lestari@example.com",
    role: "Admin",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "05cf5e66-10eb-4fd8-9dcf-b31517ce2c9d",
    email: "andi.rahman@example.com",
    role: "Admin",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "2ea94f8d-7aa3-4f3b-9506-19499cba4691",
    email: "sinta.wulandari@example.com",
    role: "Admin",
    action: <UserCog className="h-4 w-4" />,
  },
];
