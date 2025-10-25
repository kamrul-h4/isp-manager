"use client"

import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "Basic 50Mbps", value: 35, color: "hsl(var(--chart-1))" },
  { name: "Standard 100Mbps", value: 28, color: "hsl(var(--chart-2))" },
  { name: "Premium 200Mbps", value: 22, color: "hsl(var(--chart-3))" },
  { name: "Enterprise 500Mbps", value: 15, color: "hsl(var(--chart-4))" },
]

export function TopPlansChart() {
  return (
    <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-foreground flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500"></div>
          Popular Plans
        </CardTitle>
        <p className="text-sm text-muted-foreground">Distribution by subscription type</p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            "Basic 50Mbps": { label: "Basic 50Mbps", color: "hsl(var(--chart-1))" },
            "Standard 100Mbps": {
              label: "Standard 100Mbps",
              color: "hsl(var(--chart-2))",
            },
            "Premium 200Mbps": { label: "Premium 200Mbps", color: "hsl(var(--chart-3))" },
            "Enterprise 500Mbps": {
              label: "Enterprise 500Mbps",
              color: "hsl(var(--chart-4))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                nameKey="name"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
