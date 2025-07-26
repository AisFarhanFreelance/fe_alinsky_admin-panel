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
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
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

const formatNumber = (value: number | string) => {
  if (typeof value === "number") {
    return new Intl.NumberFormat("id-ID").format(value);
  }

  if (typeof value === "string" && value.startsWith("Rp.")) {
    const numericPart = value.replaceAll(/[^\d]/g, "");
    const formatted = new Intl.NumberFormat("id-ID").format(
      Number(numericPart),
    );

    return `Rp. ${formatted}`;
  }

  return value;
};
