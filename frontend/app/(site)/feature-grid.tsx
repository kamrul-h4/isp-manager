import { BarChart3, Settings, Users, Wifi } from "lucide-react"

const features = [
  {
    id: 1,
    icon: Users,
    title: "User Management",
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    id: 2,
    icon: Wifi,
    title: "Bandwidth Monitor",
    color: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
  },
  {
    id: 3,
    icon: BarChart3,
    title: "Usage Analytics",
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
  },
  {
    id: 4,
    icon: Settings,
    title: "System Config",
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
  },
]

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {features.map((feature) => (
        <div
          className="flex items-center gap-3 rounded-lg border border-border/50 bg-card/50 p-3"
          key={feature.id}
        >
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg ${feature.bgColor}`}
          >
            <feature.icon className={`h-5 w-5 ${feature.color}`} />
          </div>
          <span className="font-medium text-foreground text-sm">{feature.title}</span>
        </div>
      ))}
    </div>
  )
}
