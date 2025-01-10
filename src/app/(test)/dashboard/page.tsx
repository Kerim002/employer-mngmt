import {
  SubscriptionsCard,
  SalesCard,
  RevenueCard,
  Overview,
  ActiveUsersCard,
} from "@/widget/dashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

export default function Page() {
  return (
    <div className="flex-1 space-y-4 ">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 ">
        <RevenueCard />
        <SubscriptionsCard />
        <SalesCard />
        <ActiveUsersCard />
      </div>
      <div className="grid gap-4 grid-cols-1 ">
        <Card className="col-span-4 ">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
