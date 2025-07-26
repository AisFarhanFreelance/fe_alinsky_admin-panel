import { formatNumber } from "@/lib/number-formatter";
import { ElementType } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TabsContentProps {
  title: string;
  icon: ElementType;
  counter: string | number;
  description: string;
}

const TabsCardContent = ({
  title,
  icon: Icon,
  counter,
  description,
}: TabsContentProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{formatNumber(counter)}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default TabsCardContent;
