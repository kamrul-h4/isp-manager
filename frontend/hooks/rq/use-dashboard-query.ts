import { useQuery } from "@tanstack/react-query"
import { httpV1 } from "@/lib/xior"

export type DashboardResponse = {
  total_customers: number
  active_customers: number
  total_packages: number
  total_payments: number
  total_revenue: string
  pending_payments: number
  current_month_payments: number
}

export function useDashboardQuery() {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: () =>
      httpV1
        .request<DashboardResponse>({
          method: "GET",
          url: "/dashboard",
        })
        .then((res) => res.data),
    staleTime: 5 * 60 * 1000,
  })
}
