export type RegisterResponse = {
  first_name: string
  last_name: string
  phone: string
  email: string
  gender: string
  image: string
  password: string
  confirm_password: string
}

export type RegisterPayload = Omit<RegisterResponse, "password" | "confirm_password">
