import { createStore } from "stan-js"

import organizations from "@/data/organizations.json"
import { Organization } from "@/types/organizations"

export const { useStore: useOrganizationsStore, reset: resetOrganizationsStore } =
  createStore({
    isViewOrganizationDialogOpen: false,
    isUpsertOrganizationDialogOpen: false,
    organizationMutationType: "" as "add" | "edit",
    selectedOrganization: {} as Organization,
  })
