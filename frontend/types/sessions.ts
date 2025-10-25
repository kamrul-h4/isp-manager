export type SessionResponse = {
  sessions: Session[]
}

export type Session = {
  ".id": string
  address: string
  "caller-id": string
  encoding: string
  "limit-bytes-in": string
  "limit-bytes-out": string
  name: string
  radius: string
  service: string
  "session-id": string
  uptime: string
}
