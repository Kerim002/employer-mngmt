import { DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

export function RevenueCard() {
  return (
    <Card className="bg-green-500 text-white">
      <CardHeader className="flex  flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Jemi</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">45,231 Manat</div>
        <p className="text-xs text-gray-100">+20.1% gecen ay</p>
      </CardContent>
    </Card>
  );
}
