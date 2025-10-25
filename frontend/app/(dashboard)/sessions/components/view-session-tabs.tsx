import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SessionDetailsTab } from "./session-details-tab"

export function ViewSessionTabs() {
  return (
    <Tabs defaultValue="details">
      <TabsList>
        <TabsTrigger value="details">Details</TabsTrigger>
      </TabsList>
      <TabsContent value="details">
        <SessionDetailsTab />
      </TabsContent>
    </Tabs>
  )
}
