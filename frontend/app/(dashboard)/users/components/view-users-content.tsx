import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useUsersStore } from "@/stores/users-store"

export function ViewUsersContent() {
  const { selectedUser } = useUsersStore()

  if (!selectedUser?.uid) {
    return <div className="p-4 text-center text-muted-foreground">No user selected</div>
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start p-2 md:p-4">
      <div className="flex flex-col items-center gap-2 md:gap-4 min-w-[120px]">
        <Avatar className="w-20 h-20">
          <AvatarImage src={selectedUser.image} alt={selectedUser.first_name} />
          <AvatarFallback>
            {selectedUser.first_name?.[0]}
            {selectedUser.last_name?.[0]}
          </AvatarFallback>
        </Avatar>
        <div className="text-lg font-semibold text-center">
          {selectedUser.first_name} {selectedUser.last_name}
        </div>
        <div className="text-xs text-muted-foreground text-center">
          {selectedUser.email}
        </div>
      </div>
      <Separator orientation="vertical" className="hidden md:block h-24 mx-4" />
      <Card className="w-full max-w-md border-none shadow-none bg-transparent">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">User Details</CardTitle>
          <CardDescription className="text-xs">Account and profile info</CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-muted-foreground">Phone:</span>{" "}
              <span className="font-medium">{selectedUser.phone}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Role:</span>{" "}
              <span className="font-medium">{selectedUser.kind}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Gender:</span>{" "}
              <span className="font-medium">{selectedUser.gender}</span>
            </div>
            <div>
              <span className="text-muted-foreground">ID:</span>{" "}
              <span className="font-medium">{selectedUser.id}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
