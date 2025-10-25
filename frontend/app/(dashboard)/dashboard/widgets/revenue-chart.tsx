"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { month: "Jan", revenue: 8500, target: 10000 },
  { month: "Feb", revenue: 9200, target: 10000 },
  { month: "Mar", revenue: 10800, target: 11000 },
  { month: "Apr", revenue: 11500, target: 12000 },
  { month: "May", revenue: 12200, target: 12500 },
  { month: "Jun", revenue: 12847, target: 13000 },
]

export function RevenueChart() {
  return (
    <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-foreground flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500"></div>
          Revenue Performance
        </CardTitle>
        <p className="text-sm text-muted-foreground">Monthly revenue vs targets</p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            revenue: {
              label: "Revenue",
              color: "hsl(var(--chart-3))",
            },
            target: {
              label: "Target",
              color: "hsl(var(--chart-4))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
                opacity={0.3}
              />
              <XAxis
                dataKey="month"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar
                dataKey="target"
                fill="hsl(var(--chart-4))"
                radius={[4, 4, 0, 0]}
                opacity={0.6}
              />
              <Bar dataKey="revenue" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
