import { Badge } from "@/components/ui/badge"
import { cn, formatUptime } from "@/lib/utils"
import { useSessionsStore } from "@/stores/sessions-store"

export function SessionDetailsTab() {
  const { selectedSession } = useSessionsStore()

  return (
    <div className="grid md:grid-cols-2 gap-4 text-sm">
      <div>
        <span className="font-medium">Username:</span>
        <p>{selectedSession.name}</p>
      </div>
      <div>
        <span className="font-medium">IP Address:</span>
        <p className="font-mono">{selectedSession.address}</p>
      </div>
      <div>
        <span className="font-medium">MAC Address:</span>
        <p className="font-mono">{selectedSession["caller-id"]}</p>
      </div>
      <div>
        <span className="font-medium">Session ID:</span>
        <p className="font-mono text-xs">{selectedSession["session-id"]}</p>
      </div>
      <div>
        <span className="font-medium">Service:</span>
        <Badge
          variant="secondary"
          className={cn(
            selectedSession.service === "pppoe"
              ? "bg-blue-500 text-white dark:bg-blue-600"
              : "bg-gray-500 text-white dark:bg-gray-600",
          )}
        >
          {selectedSession.service.toUpperCase()}
        </Badge>
      </div>
      <div>
        <span className="font-medium">Uptime:</span>
        <p>{formatUptime(selectedSession.uptime)}</p>
      </div>
      <div>
        <span className="font-medium">Encoding:</span>
        <p>{selectedSession.encoding}</p>
      </div>
      <div>
        <span className="font-medium">Radius:</span>
        <p>{selectedSession.radius}</p>
      </div>
      <div>
        <span className="font-medium">Limit Bytes In:</span>
        <p>{selectedSession["limit-bytes-in"]}</p>
      </div>
      <div>
        <span className="font-medium">Limit Bytes Out:</span>
        <p>{selectedSession["limit-bytes-out"]}</p>
      </div>
    </div>
  )
}
