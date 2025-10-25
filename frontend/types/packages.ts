export type PackageResponse = {
  count: number
  next: string
  previous: string
  results: Package[]
}

export type Package = {
  id: number
  uid: string
  name: string
  speed_mbps: number
  price: string
  description: string
}
