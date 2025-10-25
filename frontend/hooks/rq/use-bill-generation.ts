import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"
import { httpV1 } from "@/lib/xior"

export function useBillGeneration() {
  return useMutation({
    mutationFn: () => {
      return httpV1.request({
        method: "POST",
        url: "/customers/bills/generate",
      })
    },
    onSuccess: () => {
      toast.success("Bills generated successfully!")
    },
    onError: (error) => {
      toast.error("Failed to generate bills. Please try again.")
      console.error("Bill generation error:", error)
    },
  })
}
