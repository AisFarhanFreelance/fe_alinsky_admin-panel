import { UserCog } from "lucide-react";

import DataTable from "@/components/data-table/data-table";

import { LeadCapturesColumns } from "./components/lead-capture-columns";

const LeadCapture = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            Lead Captures
          </h1>
          <p className="text-muted-foreground">Manage Lead Captures</p>
        </div>
      </div>

      <div>
        <DataTable columns={LeadCapturesColumns} data={leadCaptureData} />
      </div>
    </div>
  );
};

export default LeadCapture;

export const leadCaptureData = [
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    brandName: "Innovate Inc.",
    email: "contact@innovateinc.com",
    phone: "(555) 010-1234",
    social: "@InnovateInc",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    brandName: "QuantumLeap Co.",
    email: "support@quantumleap.co",
    phone: "(555) 010-2345",
    social: "linkedin.com/company/quantumleap",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "8dd7e6f5-4c3b-2a19-0876-543210fedcba",
    brandName: "Apex Solutions",
    email: "hello@apexsolutions.io",
    phone: "(555) 010-3456",
    social: "@ApexSols",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "c9b8a7d6-e5f4-3210-fedc-ba9876543210",
    brandName: "Starlight Studios",
    email: "info@starlightstudios.net",
    phone: "(555) 010-4567",
    social: "facebook.com/StarlightStudios",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "12345678-90ab-cdef-1234-567890abcdef",
    brandName: "EcoGoods",
    email: "sales@ecogoods.org",
    phone: "(555) 010-5678",
    social: "@EcoGoodsGlobal",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "fedcba98-7654-3210-fedc-ba9876543210",
    brandName: "Nexus Systems",
    email: "admin@nexussystems.dev",
    phone: "(555) 010-6789",
    social: "github.com/NexusSystems",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "6e5d4c3b-2a19-0876-5432-10fedcba9876",
    brandName: "Velocity Ventures",
    email: "partner@velocityventures.vc",
    phone: "(555) 010-7890",
    social: "@VelocityVC",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "abcdef12-3456-7890-abcd-ef1234567890",
    brandName: "Pioneer Digital",
    email: "contact@pioneerdigital.com",
    phone: "(555) 010-8901",
    social: "@PioneerDigital",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "09876543-210f-edcb-a987-6543210fedcb",
    brandName: "Terraform Builders",
    email: "build@terraform.construct",
    phone: "(555) 010-9012",
    social: "linkedin.com/company/terraform-builders",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "5a4b3c2d-1e0f-a9b8-c7d6-e5f43210abcd",
    brandName: "AquaPure Filters",
    email: "service@aquapure.com",
    phone: "(555) 011-0123",
    social: "@AquaPure",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "b1c2d3e4-f5a6-b7c8-d9e0-f1a2b3c4d5e6",
    brandName: "Zenith Tech",
    email: "reach@zenith.tech",
    phone: "(555) 011-1234",
    social: "@ZenithTech",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "11223344-5566-7788-99aa-bbccddeeff00",
    brandName: "Crimson Design",
    email: "studio@crimsondesign.art",
    phone: "(555) 011-2345",
    social: "instagram.com/crimsondesign",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "e6f7a8b9-c0d1-e2f3-a4b5-c6d7e8f9a0b1",
    brandName: "Horizon Foods",
    email: "orders@horizonfoods.co",
    phone: "(555) 011-3456",
    social: "@HorizonFoods",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "f9e8d7c6-b5a4-f3e2-d1c0-b9a8e7f6d5c4",
    brandName: "Momentum Fitness",
    email: "train@momentum.fit",
    phone: "(555) 011-4567",
    social: "facebook.com/MomentumFit",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "a0b1c2d3-e4f5-a6b7-c8d9-e0f1a2b3c4d5",
    brandName: "Catalyst Corp",
    email: "info@catalyst.corp",
    phone: "(555) 011-5678",
    social: "@CatalystCorporation",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "d5c4b3a2-f1e0-d9c8-b7a6-f5e4d3c2b1a0",
    brandName: "Odyssey Travel",
    email: "explore@odysseytravel.com",
    phone: "(555) 011-6789",
    social: "@OdysseyTravel",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "1a2b3c4d-5e6f-1a2b-3c4d-5e6f1a2b3c4d",
    brandName: "Fusion Furnishings",
    email: "design@fusionfurnishings.io",
    phone: "(555) 011-7890",
    social: "pinterest.com/fusionfurnishings",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "7e8f9a0b-1c2d-3e4f-5a6b-7c8d9e0f1a2b",
    brandName: "Evergreen Logistics",
    email: "shipping@evergreenlog.com",
    phone: "(555) 011-8901",
    social: "linkedin.com/company/evergreen-logistics",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "9c8d7e6f-5b4a-3d2c-1f0e-9a8b7c6d5e4f",
    brandName: "ByteCraft Software",
    email: "dev@bytecraft.sw",
    phone: "(555) 011-9012",
    social: "github.com/ByteCraft",
    action: <UserCog className="h-4 w-4" />,
  },
  {
    id: "2a1b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
    brandName: "SilverLining Health",
    email: "care@silverlininghealth.org",
    phone: "(555) 012-0123",
    social: "@SilverLiningHealth",
    action: <UserCog className="h-4 w-4" />,
  },
];
