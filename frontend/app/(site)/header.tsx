import { Globe } from "lucide-react"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { NavLinks } from "./nav-links"

export async function Header() {
  return (
    <header className="border-border border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Globe className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground text-lg">Mikrolink</span>
          </div>

          <Suspense fallback={<Skeleton className="h-4 w-[100px]" />}>
            <NavLinks />
          </Suspense>
        </div>
      </div>
    </header>
  )
}
