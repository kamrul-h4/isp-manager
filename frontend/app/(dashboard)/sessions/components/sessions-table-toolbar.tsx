"use client"

import { Table } from "@tanstack/react-table"
import { RefreshCw, X } from "lucide-react"
import { DataTableFacetedFilter } from "@/components/data-table/data-table-faceted-filter"
import { DataTableSearch } from "@/components/data-table/data-table-search"
import { DataTableViewOptions } from "@/components/data-table/data-table-view-options"
import { Button } from "@/components/ui/button"
import { useGetActiveSessions } from "@/hooks/rq/use-sessions-query"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

const serviceTypes = [
  {
    label: "PPPoE",
    value: "pppoe",
  },
  {
    label: "DHCP",
    value: "dhcp",
  },
  {
    label: "Static",
    value: "static",
  },
]

export function SessionsTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0
  const { refetch, isFetching } = useGetActiveSessions()

  return (
    <div className="flex gap-2 md:items-center md:justify-between flex-col md:flex-row">
      <div className="flex flex-1 items-center gap-2 flex-wrap">
        {/* <Select defaultValue="name" onValueChange={setSearchField}>
          <SelectTrigger size="sm" className="w-full md:w-[120px]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Username</SelectItem>
            <SelectItem value="address">IP Address</SelectItem>
            <SelectItem value="caller-id">MAC Address</SelectItem>
          </SelectContent>
        </Select> */}

        <DataTableSearch table={table} searchField="name" />

        {table.getColumn("service") && (
          <DataTableFacetedFilter
            column={table.getColumn("service")}
            title="Service"
            options={serviceTypes}
          />
        )}

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X />
          </Button>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Button
          onClick={() => refetch()}
          size="sm"
          variant="outline"
          disabled={isFetching}
        >
          <RefreshCw className={`h-4 w-4 ${isFetching ? "animate-spin" : ""}`} />
          Refresh
        </Button>

        <DataTableViewOptions table={table} />
      </div>
    </div>
  )
}
