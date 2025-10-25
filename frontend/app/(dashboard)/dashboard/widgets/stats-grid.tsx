// "use client"
import { Clock, CreditCard, DollarSign, Package, UserCheck, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getDashboardData } from "@/lib/apis/auth"

export async function StatsGrid() {
  // const { data, isLoading, isError } = useDashboardQuery()

  const data = await getDashboardData()

  const stats = [
    {
      title: "Total Customers",
      value: data?.total_customers,
      icon: Users,
      color: "text-gray-500",
      subtitle: "registered customers",
      change: null,
    },
    {
      title: "Active Customers",
      value: data?.active_customers,
      icon: UserCheck,
      color: "text-gray-500",
      subtitle: <span className="text-green-600">+2.5%</span>,
      change: "currently active",
    },
    {
      title: "Available Packages",
      value: data?.total_packages,
      icon: Package,
      color: "text-gray-500",
      subtitle: "service packages",
      change: null,
    },
    {
      title: "Total Revenue",
      value: `BDT ${Number(data?.total_revenue).toLocaleString(undefined, { minimumFractionDigits: 2 })}`,
      icon: CreditCard,
      color: "text-gray-500",
      subtitle: <span className="text-green-600">+12.3%</span>,
      change: "from paid invoices",
    },
    {
      title: "Total Payments",
      value: data?.total_payments,
      icon: DollarSign,
      color: "text-gray-500",
      subtitle: "all payments",
      change: null,
    },
    {
      title: "Pending Payments",
      value: data?.pending_payments,
      icon: Clock,
      color: "text-gray-500",
      subtitle: "awaiting payment",
      change: null,
    },
    {
      title: "Current Month Payments",
      value: data?.current_month_payments,
      icon: CreditCard,
      color: "text-gray-500",
      subtitle: "paid this month",
      change: null,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card
          key={stat.title}
          className="border border-border rounded-xl shadow-none px-6 py-4 flex flex-col justify-between min-h-[140px]"
        >
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-5 w-5 ${stat.color}`} />
          </div>
          <CardContent className="px-0 pt-2 pb-0">
            <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              {stat.subtitle}
              {stat.change && <span className="ml-1">{stat.change}</span>}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
