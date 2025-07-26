import DashboardTabs from "@/components/tabs/dashboard-tabs";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          Dashboard
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam itaque
          corporis atque!
        </p>
      </div>

      <div>
        <DashboardTabs />
      </div>
    </div>
  );
}
