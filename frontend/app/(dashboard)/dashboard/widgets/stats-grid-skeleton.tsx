import { Skeleton } from "@/components/ui/skeleton"

export function StatsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Array.from({ length: 7 }).map((_, i) => (
        <div
          key={i}
          className="border border-border rounded-xl shadow-none px-6 py-4 min-h-[140px] flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-4">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-5 w-5" />
          </div>
          <div className="px-0 pt-2 pb-0">
            <Skeleton className="h-8 w-20 mb-2" />
            <Skeleton className="h-3 w-32" />
          </div>
        </div>
      ))}
    </div>
  )
}
