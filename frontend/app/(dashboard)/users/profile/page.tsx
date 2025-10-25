"use client"

import { useSession } from "@/hooks/rq/use-auth-query"
import { ChangePasswordForm } from "./change-password-form"

export default function ProfilePage() {
  const { data: session } = useSession()

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
          {session?.first_name?.charAt(0) ?? session?.email?.charAt(0) ?? "U"}
        </div>
        <div>
          <h1 className="text-2xl font-bold">
            {session?.first_name} {session?.last_name}
          </h1>
          <p className="text-muted-foreground">{session?.email}</p>
        </div>
      </div>

      <section>
        <h2 className="text-lg font-semibold mb-2">Change password</h2>
        <div className="max-w-md">
          <ChangePasswordForm />
        </div>
      </section>
    </div>
  )
}
