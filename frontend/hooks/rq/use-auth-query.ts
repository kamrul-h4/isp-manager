import {
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query"
import { useRouter, useSearchParams } from "next/navigation"
import { toast } from "sonner"
import { XiorError } from "xior"
import { httpV1 } from "@/lib/xior"
import { LoginResponse } from "@/types/logins"
import { RegisterPayload, RegisterResponse } from "@/types/register"

export type Session = {
  id: number
  uid: string
  first_name: string
  last_name: string
  phone: string
  email: string
  gender: string
  image: string
  kind: string
  organization: Organization
  created_at: Date
  updated_at: Date
}

export type Organization = {
  uid: string
  name: string
  phone: string
  email: string
  subscription_status: string
  subscription_end_date: Date
  allowed_customer: number
  total_customer: number
}

export function useLogin() {
  const router = useRouter()
  const searchParams = useSearchParams()

  return useMutation({
    mutationKey: ["login"],
    mutationFn: (payload: { phone: string; password: string }) => {
      return httpV1
        .request<LoginResponse>({
          method: "post",
          url: "/users/login",
          data: payload,
        })
        .then((res) => res.data)
    },
    onSuccess: (data) => {
      toast.success("Successfully logged in")
      document.cookie = `token=${data.access_token}; path=/; max-age=${7 * 24 * 60 * 60}; secure; samesite=strict`
      const redirectTo = searchParams.get("redirect") || "/dashboard"
      router.push(redirectTo)
    },
  })
}

export function useLogout() {
  const router = useRouter()
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["logout"],
    mutationFn: async () => {
      if (typeof window !== "undefined") {
        localStorage.clear()
        document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
      }
    },
    onSuccess: () => {
      queryClient.clear()
      toast.success("Successfully logged out")
      router.push("/")
    },
    onError: () => {
      toast.error("Logout failed")
    },
  })
}

export function useRegister() {
  const router = useRouter()
  return useMutation({
    mutationKey: ["register"],
    mutationFn: (payload: RegisterPayload) => {
      return httpV1
        .request<RegisterResponse>({
          method: "post",
          url: "/users/register",
          data: payload,
        })
        .then((res) => res.data)
    },
    onSuccess: () => {
      router.push("/dashboard")
    },
    onError: (error) => {
      if (error instanceof XiorError) {
        toast.error("Registration failed. Please try again", {
          description: error.message,
        })
      }
    },
  })
}

export function useForgotPassword() {
  return useMutation({
    mutationKey: ["forgot-password"],
    mutationFn: (payload: {
      phone: string
      otp?: string
      password?: string
      confirm_password?: string
    }) => {
      return httpV1
        .request<{
          phone: string
          otp: string
        }>({
          method: "post",
          url: "/users/forget-password",
          data: payload,
        })
        .then((res) => res.data)
    },
  })
}

export function sessionOptions() {
  return queryOptions({
    queryKey: ["session"],
    queryFn: () => {
      return httpV1
        .request<Session>({ method: "GET", url: "/users/me", cache: "no-store" })
        .then((res) => res.data)
    },
    staleTime: 10 * 60 * 1000,
  })
}

export function useSession() {
  return useQuery(sessionOptions())
}

export function useSuspenseSession() {
  return useSuspenseQuery(sessionOptions())
}
