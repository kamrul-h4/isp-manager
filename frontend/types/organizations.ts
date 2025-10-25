export type OrganizationResponse = {
  code: number
  next: string
  previous: null
  count: number
  results: Organization[]
}

export type Organization = {
  id: number
  uid: string
  name: string
  address: string
  phone: string
  email: string
  website: string
  subscription: number | null
  subscription_status: "ACTIVE" | "EXPIRED" | "CANCELLED" | "PENDING"
  subscription_end_date: string | null
  logo: string
  allowed_customer: number
  total_customer: number
  router_ip?: string
  router_username?: string
  router_password?: string
  router_port?: number
  router_secret?: string
  router_ssl?: boolean
  created_at: string
  updated_at: string
}

export type CreateOrganization = {
  name: string
  address?: string
  phone?: string
  email?: string
  website?: string
  subscription?: number | null
  subscription_status?: "ACTIVE" | "EXPIRED" | "CANCELLED" | "PENDING"
  allowed_customer?: number
  total_customer?: number
  router_ip?: string
  router_username?: string
  router_password?: string
  router_port?: number
  router_secret?: string
  router_ssl?: boolean
}

export type UpdateOrganization = Partial<CreateOrganization>
