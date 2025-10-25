import "server-only"
import { cookies } from "next/headers"
import xior from "xior"

type Session = {
  id: number
  uid: string
  first_name: string
  last_name: string
  phone: string
  email: string
  gender: string
  image: string
  kind: string
  created_at: Date
  updated_at: Date
}

type DashboardData = {
  total_customers: number
  active_customers: number
  total_packages: number
  total_payments: number
  total_revenue: string
  pending_payments: number
  current_month_payments: number
}

const http = xior.create({
  baseURL: "https://api.mikrolink.artsensebd.com/api/v1",
})

http.interceptors.request.use(async (config) => {
  const cookieStore = await cookies()

  const token = cookieStore.get("token")?.value

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export async function getSession() {
  try {
    const res = await http
      .request<Session>({ method: "GET", url: "/users/me", cache: "no-store" })
      .then((res) => res.data)

    return res
  } catch (error) {
    return null
  }
}

export async function getDashboardData() {
  try {
    const res = await http
      .request<DashboardData>({ method: "GET", url: "/dashboard" })
      .then((res) => res.data)
    return res
  } catch (error) {
    return null
  }
}
