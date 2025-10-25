import { z } from "zod"

export const sessionSchema = z.object({
  ".id": z.string(),
  address: z.string(),
  "caller-id": z.string(),
  encoding: z.string(),
  "limit-bytes-in": z.string(),
  "limit-bytes-out": z.string(),
  name: z.string(),
  radius: z.string(),
  service: z.string(),
  "session-id": z.string(),
  uptime: z.string(),
})

export const sessionResponseSchema = z.object({
  sessions: z.array(sessionSchema),
})

export type Session = z.infer<typeof sessionSchema>
export type SessionResponse = z.infer<typeof sessionResponseSchema>
