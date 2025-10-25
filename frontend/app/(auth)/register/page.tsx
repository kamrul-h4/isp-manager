import { Suspense } from "react"
import { RegisterForm } from "@/app/(site)/register-form"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Suspense>
        <RegisterForm />
      </Suspense>
    </div>
  )
}
