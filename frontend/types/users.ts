export type UserResponse = {
  count: number
  next: string
  previous: string
  results: User[]
}

export type User = {
  id: number
  uid: string
  first_name: string
  last_name: string
  phone: string
  email: string
  gender: string
  kind: string
  image: string
}
