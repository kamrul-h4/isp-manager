import { Badge } from "@/components/ui/badge"
import { useCustomersStore } from "@/stores/customers-store"

export function CustomersDetailsTab() {
  const { selectedCustomer } = useCustomersStore()

  return (
    <div className="grid  md:grid-cols-2 gap-4 text-sm">
      <div>
        <span className="font-medium">Phone:</span>
        <p>{selectedCustomer.phone}</p>
      </div>
      <div>
        <span className="font-medium">Address:</span>
        <p>{selectedCustomer.address || "N/A"}</p>
      </div>
      <div>
        <span className="font-medium">NID:</span>
        <p>{selectedCustomer.nid}</p>
      </div>
      <div>
        <span className="font-medium">Connection Start:</span>
        <p>{selectedCustomer.connection_start_date || "Not set"}</p>
      </div>
      <div>
        <span className="font-medium mr-2">Status:</span>
        <Badge variant={selectedCustomer.is_active ? "default" : "secondary"}>
          {selectedCustomer.is_active ? "Active" : "Inactive"}
        </Badge>
      </div>
      <div>
        <span className="font-medium">IP Address:</span>
        <p>{selectedCustomer.ip_address}</p>
      </div>
      <div>
        <span className="font-medium">MAC Address:</span>
        <p>{selectedCustomer.mac_address}</p>
      </div>
      <div>
        <span className="font-medium">Username:</span>
        <p>{selectedCustomer.username}</p>
      </div>
      <div>
        <span className="font-medium">Password:</span>
        <p className="font-mono tracking-wider">{selectedCustomer.password}</p>
      </div>
      <div>
        <span className="font-medium mr-2">Connection Type:</span>
        <Badge>{selectedCustomer.connection_type}</Badge>
      </div>
    </div>
  )
}
