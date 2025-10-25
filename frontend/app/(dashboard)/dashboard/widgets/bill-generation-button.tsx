"use client"
import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useBillGeneration } from "@/hooks/rq/use-bill-generation"

export function BillGenerationButton() {
  const billGeneration = useBillGeneration()

  return (
    <Button
      onClick={() => billGeneration.mutate()}
      disabled={billGeneration.isPending}
      size="sm"
      variant="link"
    >
      <FileText className="h-4 w-4" />
      {billGeneration.isPending ? "Generating..." : "Generate Bills"}
    </Button>
  )
}
