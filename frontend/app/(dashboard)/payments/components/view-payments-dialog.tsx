import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { usePaymentsStore } from "@/stores/payments-store"
import { ViewPaymentsContent } from "./view-payments-content"

export function ViewPaymentsDialog() {
  const { isViewPaymentDialogOpen, setIsViewPaymentDialogOpen } = usePaymentsStore()

  return (
    <Dialog open={isViewPaymentDialogOpen} onOpenChange={setIsViewPaymentDialogOpen}>
      <DialogContent className="max-h-[90vh] max-w-[100vw] rounded-none md:rounded-lg lg:!max-w-[70vw] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Payment Details</DialogTitle>
          <DialogDescription>
            View detailed information about the payment.
          </DialogDescription>
        </DialogHeader>
        <ViewPaymentsContent />
      </DialogContent>
    </Dialog>
  )
}
