import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { usePackagesStore } from "@/stores/packages-store"

export function ViewPackagesDialog() {
  const { isViewPackageDialogOpen, setIsViewPackageDialogOpen, selectedPackage } =
    usePackagesStore()

  return (
    <Dialog open={isViewPackageDialogOpen} onOpenChange={setIsViewPackageDialogOpen}>
      <DialogContent className="flex flex-col max-w-[100vw] rounded-none md:rounded-lg lg:!max-w-[50vw] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{selectedPackage.name}</DialogTitle>
          <DialogDescription>
            {selectedPackage.description || "No description provided."}
          </DialogDescription>
        </DialogHeader>

        <Card className="w-full">
          <CardContent className="space-y-4 text-sm">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-medium">Package Name</p>
                <p className="text-muted-foreground">{selectedPackage.name}</p>
              </div>

              <div>
                <p className="font-medium">Speed (Mbps)</p>
                <p className="text-muted-foreground">{selectedPackage.speed_mbps} Mbps</p>
              </div>
            </div>

            <div>
              <p className="font-medium">Price (BDT)</p>
              <p className="text-muted-foreground">{selectedPackage.price}</p>
            </div>

            <div>
              <p className="font-medium">Description</p>
              <p className="text-muted-foreground">
                {selectedPackage.description || "No description provided."}
              </p>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  )
}
