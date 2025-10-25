import { createStore } from "stan-js"

import { Payment } from "@/types/payments"

export const { useStore: usePaymentsStore, reset: resetPaymentsStore } = createStore({
  isViewPaymentDialogOpen: false,
  isUpsertPaymentDialogOpen: false,
  paymentMutationType: "" as "add" | "edit",
  selectedPayment: {} as Payment,
})
