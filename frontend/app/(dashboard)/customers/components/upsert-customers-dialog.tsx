import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { resetCustomersStore, useCustomersStore } from "@/stores/customers-store"
import { CustomersUpsertForm } from "./customers-upsert-form"

export function UpsertCustomersDialog() {
  const {
    isUpsertCustomerDialogOpen,
    setIsUpsertCustomerDialogOpen,
    customerMutationType,
  } = useCustomersStore()

  const title = customerMutationType === "add" ? "Add Customer" : "Edit Customer"
  const description =
    customerMutationType === "add"
      ? "Add a new customer to the system. You can set up their profile, preferences, and more."
      : "Edit the existing customer. You can update content, settings, and other details."

  return (
    <Dialog
      open={isUpsertCustomerDialogOpen}
      onOpenChange={() => {
        resetCustomersStore("selectedCustomer")
        setIsUpsertCustomerDialogOpen(false)
      }}
    >
      <DialogContent className="max-h-[90vh] max-w-[100vw] lg:!max-w-[70vw] overflow-y-auto rounded-none md:rounded-lg">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <CustomersUpsertForm />
      </DialogContent>
    </Dialog>
  )
}
