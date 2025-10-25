import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  resetOrganizationsStore,
  useOrganizationsStore,
} from "@/stores/organizations-store"
import { ViewOrganizationsContent } from "./view-organizations-content"

export function ViewOrganizationsDialog() {
  const { isViewOrganizationDialogOpen, setIsViewOrganizationDialogOpen } =
    useOrganizationsStore()

  return (
    <Dialog
      open={isViewOrganizationDialogOpen}
      onOpenChange={() => {
        resetOrganizationsStore("selectedOrganization")
        setIsViewOrganizationDialogOpen(false)
      }}
    >
      <DialogContent className="max-h-[90vh] max-w-[100vw] rounded-none md:rounded-lg lg:!max-w-[70vw] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Organization Details</DialogTitle>
          <DialogDescription>
            View detailed information about the organization.
          </DialogDescription>
        </DialogHeader>
        <ViewOrganizationsContent />
      </DialogContent>
    </Dialog>
  )
}
