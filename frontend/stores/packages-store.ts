import { createStore } from "stan-js"

import packages from "@/data/packages.json"

export const { useStore: usePackagesStore, reset: resetPacksgesStore } = createStore({
  isViewPackageDialogOpen: false,
  isUpsertPackageDialogOpen: false,
  packageMutationType: "" as "add" | "edit",
  selectedPackage: {} as (typeof packages.results)[0],
})
