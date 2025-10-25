"use client"

import { Globe, Server, Wifi, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const metrics = [
  {
    name: "Network Uptime",
    value: 99.8,
    status: "excellent",
    icon: Wifi,
    color: "text-green-500",
  },
  {
    name: "Server Response",
    value: 95.2,
    status: "good",
    icon: Server,
    color: "text-blue-500",
  },
  {
    name: "Internet Gateway",
    value: 87.5,
    status: "fair",
    icon: Globe,
    color: "text-yellow-500",
  },
  {
    name: "Peak Performance",
    value: 92.8,
    status: "good",
    icon: Zap,
    color: "text-purple-500",
  },
]

export function NetworkPerformance() {
  return (
    <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-foreground flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
          Network Performance
        </CardTitle>
        <p className="text-sm text-muted-foreground">Real-time system metrics</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {metrics.map((metric) => (
          <div key={metric.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <metric.icon className={`h-4 w-4 ${metric.color}`} />
                <span className="text-sm font-medium">{metric.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold">{metric.value}%</span>
                <Badge
                  variant={
                    metric.status === "excellent"
                      ? "default"
                      : metric.status === "good"
                        ? "secondary"
                        : "outline"
                  }
                  className="text-xs"
                >
                  {metric.status}
                </Badge>
              </div>
            </div>
            <Progress value={metric.value} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
