import { Suspense } from "react"
import { FeatureGrid } from "@/app/(site)/feature-grid"
import { LoginForm } from "@/app/(site)/login-form"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-background to-muted/30 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-bold text-4xl tracking-tight lg:text-5xl xl:text-6xl">
                Manage Your <span className="text-primary">Internet Users</span>
              </h1>
              <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
                Efficiently manage internet subscribers, monitor usage, handle billing,
                and provide seamless connectivity. Professional tools for modern internet
                service providers.
              </p>
            </div>

            <FeatureGrid />
          </div>

          <div className="flex justify-center lg:justify-end">
            <Suspense>
              <LoginForm />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  )
}
