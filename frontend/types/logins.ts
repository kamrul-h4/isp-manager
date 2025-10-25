export type LoginResponse = {
  access_token: string
  refresh_token: string
  access_token_exp: number
  refresh_token_exp: number
  user: User
}

export type User = {
  id: number
  uid: string
  first_name: string
  last_name: string
  phone: string
  email: string
  kind: string
  is_superuser: boolean
  organization: Organization
}

export type Organization = {
  id: number
  name: string
  subscription_end_date: Date
}
