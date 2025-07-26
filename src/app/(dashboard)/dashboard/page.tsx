import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import DashboardChart from "@/components/chart/dashboard-chart";
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
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
        <div className="lg:col-span-4">
          <Card>
            <CardHeader>
              <CardTitle>Transaction Overview</CardTitle>
              <CardDescription>Transaction volume over time</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <DashboardChart />
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            debitis praesentium omnis obcaecati totam similique fugiat eveniet
            harum tempore consequatur.
          </p>
        </div>
      </div>
    </div>
  );
}
