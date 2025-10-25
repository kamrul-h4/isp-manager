"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ReactNode } from "react"
import { toast } from "sonner"
import { XiorError } from "xior"

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (error) => {
        if (error instanceof XiorError) {
          const data = Object.entries(error.response?.data || {})?.[0]

          const message = (data?.[1] as string) || "Failed. Please try Again"
          toast.error(message)
        }
      },
    },
    queries: {
      staleTime: 5 * 60 * 1000,
    },
  },
})

export function QueryProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
