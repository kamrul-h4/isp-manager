import { Suspense } from "react"
import { BillGenerationButton } from "./widgets/bill-generation-button"
import { StatsGrid } from "./widgets/stats-grid"
import { StatsGridSkeleton } from "./widgets/stats-grid-skeleton"

export default function Page() {
  return (
    <main className="container mx-auto space-y-4">
      <div className="flex justify-end items-center">
        <BillGenerationButton />
      </div>
      <Suspense fallback={<StatsGridSkeleton />}>
        <StatsGrid />
      </Suspense>
    </main>
  )
}
