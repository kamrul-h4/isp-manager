"use client"

import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { useSuspenseSession } from "@/hooks/rq/use-auth-query"
import { generateAvatarUrl, getInitials } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export function TeamSwitcher() {
  const { data: session } = useSuspenseSession()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="rounded-md">
                <AvatarImage src={generateAvatarUrl(session.organization.name)} />
                <AvatarFallback className="text-xs font-light rounded-md">
                  {getInitials(session.organization.name)}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{session.organization.name}</span>
                <span className="truncate text-xs">
                  {session.organization.subscription_status}
                </span>
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
