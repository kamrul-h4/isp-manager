import { Suspense } from "react"
import { ForgotPasswordForm } from "./forgot-password-form"

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Suspense>
        <ForgotPasswordForm />
      </Suspense>
    </div>
  )
}
