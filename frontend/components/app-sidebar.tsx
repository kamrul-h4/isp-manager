"use client"
import {
  Building2,
  CreditCard,
  LayoutDashboard,
  Package2,
  Settings2,
  User,
  Users,
  Wifi,
} from "lucide-react"
import type * as React from "react"
import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { getCustomerListOptions } from "@/hooks/rq/use-customers-query"
import { getOrganizationListOptions } from "@/hooks/rq/use-organizations-query"
import { getPackageListOptions } from "@/hooks/rq/use-packages-query"
import { getPaymentListOptions } from "@/hooks/rq/use-payment-query"
import { getSessionsOptions } from "@/hooks/rq/use-sessions-query"
import { getUserListOptions } from "@/hooks/rq/use-users-query"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Customers",
      url: "/customers",
      icon: Users,
      prefetchOptions: getCustomerListOptions,
    },
    {
      title: "Sessions",
      url: "/sessions",
      icon: Wifi,
      prefetchOptions: getSessionsOptions,
    },
    {
      title: "Payments",
      url: "/payments",
      icon: CreditCard,
      prefetchOptions: getPaymentListOptions,
    },
    {
      title: "Packages",
      url: "/packages",
      icon: Package2,
      prefetchOptions: getPackageListOptions,
    },
    {
      title: "Users",
      url: "/users",
      icon: User,
      prefetchOptions: getUserListOptions,
    },
    {
      title: "Organizations",
      url: "/organizations",
      icon: Building2,
      prefetchOptions: getOrganizationListOptions,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <ErrorBoundary
          fallback={
            <div className="text-xs text-center text-red-500">Failed to load</div>
          }
        >
          <Suspense
            fallback={
              <div className="h-10 w-full animate-pulse bg-slate-200 rounded-md" />
            }
          >
            <TeamSwitcher />
          </Suspense>
        </ErrorBoundary>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
