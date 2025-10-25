import { BarChart3, Settings, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    id: 1,
    icon: Users,
    title: "User Management",
    description:
      "Manage internet subscribers, accounts, and service plans from a centralized dashboard.",
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    id: 2,
    icon: BarChart3,
    title: "Usage Analytics",
    description:
      "Monitor bandwidth usage, track data consumption, and generate detailed usage reports.",
    color: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
  },
  {
    id: 3,
    icon: Settings,
    title: "Network Control",
    description:
      "Configure network settings, manage bandwidth allocation, and control user access.",
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-muted/30 py-16 lg:py-24" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="font-bold text-3xl tracking-tight lg:text-4xl">
            Why Choose Mikrolink?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Professional tools designed specifically for internet service providers to
            efficiently manage their subscribers and network operations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <Card
              className="border-0 bg-card/50 shadow-lg backdrop-blur transition-shadow duration-300 hover:shadow-xl"
              key={feature.id}
            >
              <CardContent className="space-y-4 p-8 text-center">
                <div
                  className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${feature.bgColor} mx-auto`}
                >
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="font-semibold text-foreground text-xl">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
