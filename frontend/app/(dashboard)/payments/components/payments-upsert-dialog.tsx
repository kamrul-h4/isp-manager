import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { resetPaymentsStore, usePaymentsStore } from "@/stores/payments-store"
import { PaymentsUpsertForm } from "./payments-upsert-form"

export function PaymentsUpsertDialog() {
  const { isUpsertPaymentDialogOpen, setIsUpsertPaymentDialogOpen, paymentMutationType } =
    usePaymentsStore()

  const title = paymentMutationType === "add" ? "Add Payment" : "Edit Payment"
  const description =
    paymentMutationType === "add"
      ? "Add a new payment to the system."
      : "Edit the existing payment."

  return (
    <Dialog
      open={isUpsertPaymentDialogOpen}
      onOpenChange={() => {
        resetPaymentsStore("selectedPayment")
        setIsUpsertPaymentDialogOpen(false)
      }}
    >
      <DialogContent className="max-h-[90vh] max-w-[100vw] rounded-none md:rounded-lg lg:!max-w-[50vw] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <PaymentsUpsertForm />
      </DialogContent>
    </Dialog>
  )
}
