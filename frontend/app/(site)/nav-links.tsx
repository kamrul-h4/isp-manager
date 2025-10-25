import Link from "next/link"
import { getSession } from "@/lib/apis/auth"

export const dynamic = "force-dynamic"

export async function NavLinks() {
  const session = await getSession()

  return (
    <nav className="hidden items-center gap-8 md:flex">
      {session ? (
        <Link
          className="font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
          href="/dashboard"
        >
          {session.email}
        </Link>
      ) : (
        <div className="flex items-center gap-4">
          <Link
            className="font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
            href="/login"
          >
            Login
          </Link>

          <Link
            className="font-medium text-foreground text-sm rounded-md px-3 py-1 bg-primary/10 hover:bg-primary/20 transition-colors"
            href="/register"
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  )
}
