import { getLeadCapture } from "@/actions/lead-capture-actions";

import DataTable from "@/components/data-table/data-table";

import { LeadCapturesColumns } from "./components/lead-capture-columns";

const LeadCapture = async () => {
  const leadCaptures = await getLeadCapture();

  if (!leadCaptures.success) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">Error Occurred</h1>
        <p className="text-muted-foreground">{leadCaptures.message}</p>
      </div>
    );
  }

  const leadCaptureData = (leadCaptures.data ?? []).map((item) => ({
    id: item.id,
    brandName: item.brand_name,
    email: item.email,
    phone: item.phone_number,
    social: item.social_url,
  }));

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
