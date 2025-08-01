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

export const users = [
  {
    id: "3e1d4553-b801-40c1-a97b-52a4e649a324",
    name: "Aldo Pratama",
    email: "aldo.pratama@example.com",
    phone: "+62 812-3456-7890",
    social: "https://twitter.com/aldopratama",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "f6f7414f-60a3-4b13-b9b4-8a028dbce6c3",
    name: "Dina Kusuma",
    email: "dina.kusuma@example.com",
    phone: "+62 813-2233-4455",
    social: "https://instagram.com/dinakusuma",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "fc9e53e2-2b9a-42c9-885b-6f0c7b60b281",
    name: "Rama Wijaya",
    email: "rama.wijaya@example.com",
    phone: "+62 822-3344-5566",
    social: "https://facebook.com/ramawijaya",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "9b19a5a2-3e3c-4d2f-9a3e-46bd351733e3",
    name: "Sari Oktaviani",
    email: "sari.oktaviani@example.com",
    phone: "+62 851-7788-9900",
    social: "https://linkedin.com/in/sarioktaviani",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "132223fd-553c-47a6-9a5b-291cfb981c62",
    name: "Budi Santoso",
    email: "budi.santoso@example.com",
    phone: "+62 812-8888-7777",
    social: "https://github.com/budisantoso",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "d39e9c5a-3e86-456e-9406-f1537d9978e6",
    name: "Nina Azzahra",
    email: "nina.azzahra@example.com",
    phone: "+62 821-5678-1234",
    social: "https://instagram.com/ninaazzahra",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "0cf57d85-3cc2-4f8b-b07e-e04aef5d7981",
    name: "Yusuf Maulana",
    email: "yusuf.maulana@example.com",
    phone: "+62 857-1234-9876",
    social: "https://twitter.com/yusufmaulana",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "e4e98db9-7691-4df8-b09b-90e60d6b5296",
    name: "Clara Tania",
    email: "clara.tania@example.com",
    phone: "+62 813-7654-3210",
    social: "https://linkedin.com/in/claratania",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "b861ce5a-cf6f-4322-85f4-f99e14666bc4",
    name: "Hendra Saputra",
    email: "hendra.saputra@example.com",
    phone: "+62 822-8765-4321",
    social: "https://facebook.com/hendrasaputra",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "fa46d52c-68fd-4cb1-bc04-5984ef33ac7d",
    name: "Melati Dewi",
    email: "melati.dewi@example.com",
    phone: "+62 852-9999-8888",
    social: "https://instagram.com/melatidewi",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "c7b133e6-3a60-4f41-b1d3-55e6c5b4a017",
    name: "Aditya Rinaldi",
    email: "aditya.rinaldi@example.com",
    phone: "+62 812-1111-2222",
    social: "https://github.com/adityarinaldi",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "de2e7164-15a2-4cb6-bd1e-17464552ae51",
    name: "Rika Permata",
    email: "rika.permata@example.com",
    phone: "+62 813-3333-4444",
    social: "https://twitter.com/rikapermata",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "75d7bafe-456a-4d39-a0a3-bb40bfe40ab6",
    name: "Galih Nugroho",
    email: "galih.nugroho@example.com",
    phone: "+62 821-4444-5555",
    social: "https://linkedin.com/in/galihnugroho",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "dd4c545f-8453-4f43-a5c2-837d2f98fd96",
    name: "Tania Marlina",
    email: "tania.marlina@example.com",
    phone: "+62 823-5555-6666",
    social: "https://instagram.com/taniamarlina",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "9d8be7a1-7437-4dd6-9177-658ec265101e",
    name: "Fikri Ramadhan",
    email: "fikri.ramadhan@example.com",
    phone: "+62 857-6666-7777",
    social: "https://facebook.com/fikriramadhan",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "6cd96139-b949-4261-a118-cab46bb2d0e9",
    name: "Laras Puspita",
    email: "laras.puspita@example.com",
    phone: "+62 814-7777-8888",
    social: "https://github.com/laraspuspita",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "fd1ebce0-90df-4087-b144-c73281a867f7",
    name: "Reza Oktavian",
    email: "reza.oktavian@example.com",
    phone: "+62 815-8888-9999",
    social: "https://twitter.com/rezaoktavian",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "0e7b5d44-d118-47d6-803b-7905f7f3004e",
    name: "Citra Lestari",
    email: "citra.lestari@example.com",
    phone: "+62 816-9999-0000",
    social: "https://instagram.com/citralestari",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "05cf5e66-10eb-4fd8-9dcf-b31517ce2c9d",
    name: "Andi Rahman",
    email: "andi.rahman@example.com",
    phone: "+62 812-0000-1111",
    social: "https://linkedin.com/in/andirahman",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "2ea94f8d-7aa3-4f3b-9506-19499cba4691",
    name: "Sinta Wulandari",
    email: "sinta.wulandari@example.com",
    phone: "+62 813-2222-3333",
    social: "https://facebook.com/sintawulandari",
    action: <UserCog className="h-4 w-4" />,
  },
];
