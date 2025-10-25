import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { resetCustomersStore } from "@/stores/customers-store"
import { usePackagesStore } from "@/stores/packages-store"
import { PackagesUpsertForm } from "./packages-upsert-form"

export function UpsertPackagesDialog() {
  const { isUpsertPackageDialogOpen, setIsUpsertPackageDialogOpen, packageMutationType } =
    usePackagesStore()

  const title = packageMutationType === "add" ? "Add Package" : "Edit Package"
  const description =
    packageMutationType === "add"
      ? "Add a new package to the system."
      : "Edit the existing package."

  return (
    <Dialog
      open={isUpsertPackageDialogOpen}
      onOpenChange={() => {
        resetCustomersStore("selectedCustomer")
        setIsUpsertPackageDialogOpen(false)
      }}
    >
      <DialogContent className="max-h-[90vh] max-w-[100vw] rounded-none md:rounded-lg overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <PackagesUpsertForm />
      </DialogContent>
    </Dialog>
  )
}
