import { Newspaper, UserPlus, Users, Wallet } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import TabsCardContent from "./tabs-card-content";

const DashboardTabs = () => {
  return (
    <>
      <Tabs defaultValue="daily" className="space-y-4">
        <TabsList>
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
        </TabsList>

        {Object.entries(cardItems).map(([key, cards]) => (
          <TabsContent key={key} value={key}>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {cards.map((card, idx) => (
                <TabsCardContent
                  key={idx}
                  title={card.title}
                  icon={card.icon}
                  counter={card.counter}
                  description={card.description}
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
};

export default DashboardTabs;

const cardItems = {
  daily: [
    {
      title: "New User's Today",
      icon: UserPlus,
      counter: 24,
      description: "+12% from yesterday",
    },
    {
      title: "Total User's",
      icon: Users,
      counter: 1984,
      description: "+2.5% from last week",
    },
    {
      title: "Transaction Today",
      icon: Wallet,
      counter: `Rp. ${190_000}`,
      description: "+18% from yesterday",
    },
    {
      title: "Articles Today",
      icon: Newspaper,
      counter: 2,
      description: "+1 articles",
    },
  ],
  weekly: [
    {
      title: "New User's This Week",
      icon: UserPlus,
      counter: 24,
      description: "+12% from last week",
    },
    {
      title: "Total User's",
      icon: Users,
      counter: 1984,
      description: "+2.5% from last week",
    },
    {
      title: "Transaction This Week",
      icon: Wallet,
      counter: `Rp. ${190_000}`,
      description: "+18% from last week",
    },
    {
      title: "Articles This Week",
      icon: Newspaper,
      counter: 2,
      description: "+26% articles from last week",
    },
  ],
  monthly: [
    {
      title: "New User's This Month",
      icon: UserPlus,
      counter: 24,
      description: "+12% from last month",
    },
    {
      title: "Total User's",
      icon: Users,
      counter: 1984,
      description: "+2.5% from last month",
    },
    {
      title: "Transaction This Month",
      icon: Wallet,
      counter: `Rp. ${190_000}`,
      description: "+18% from last month",
    },
    {
      title: "Articles This Month",
      icon: Newspaper,
      counter: 2,
      description: "+20% articles from last month",
    },
  ],
};
