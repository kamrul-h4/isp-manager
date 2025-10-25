import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useSessionsStore } from "@/stores/sessions-store"
import { ViewSessionTabs } from "./view-session-tabs"

export function ViewSessionsDialog() {
  const { isViewSessionDialogOpen, setIsViewSessionDialogOpen, selectedSession } =
    useSessionsStore()

  return (
    <Dialog open={isViewSessionDialogOpen} onOpenChange={setIsViewSessionDialogOpen}>
      <DialogContent className="flex flex-col h-[90vh] max-w-[100vw] lg:!max-w-[70vw] overflow-y-auto rounded-none md:rounded-lg">
        <DialogHeader>
          <DialogTitle>{selectedSession.name}</DialogTitle>
          <DialogDescription>{selectedSession.address}</DialogDescription>
        </DialogHeader>
        <ViewSessionTabs />
      </DialogContent>
    </Dialog>
  )
}
