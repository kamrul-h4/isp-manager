import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { resetUsersStore, useUsersStore } from "@/stores/users-store"
import { UsersUpsertForm } from "./users-upsert-form"

export function UpsertUsersDialog() {
  const { isUpsertUserDialogOpen, setIsUpsertUserDialogOpen, userMutationType } =
    useUsersStore()

  const title = userMutationType === "add" ? "Add User" : "Edit User"
  const description =
    userMutationType === "add"
      ? "Add a new user to the system."
      : "Edit the existing user."

  return (
    <Dialog
      open={isUpsertUserDialogOpen}
      onOpenChange={() => {
        resetUsersStore("selectedUser")
        setIsUpsertUserDialogOpen(false)
      }}
    >
      <DialogContent className="max-h-[90vh] max-w-[100vw] md:max-w-[60vw] rounded-none md:rounded-lg overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <UsersUpsertForm />
      </DialogContent>
    </Dialog>
  )
}
