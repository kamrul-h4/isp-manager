"use client"

import { Check, ChevronsUpDown } from "lucide-react"
import { useState } from "react"
import { useFormContext } from "react-hook-form"
import { Virtuoso } from "react-virtuoso"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useGetCustomerList } from "@/hooks/rq/use-customers-query"
import { cn, generateAvatarUrl, getInitials } from "@/lib/utils"

export function CustomerSelect() {
  const form = useFormContext()
  const { data: customerData } = useGetCustomerList()
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")

  const customers = customerData?.results || []
  const filteredCustomers = customers.filter((customer) =>
    customer.username.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <FormField
      control={form.control}
      name="customer_id"
      render={({ field }) => {
        const selectedUsername = customers.find(
          (customer) => customer.id === field.value,
        )?.username

        return (
          <FormItem className="flex flex-col">
            <FormLabel>Customer</FormLabel>
            <Popover modal open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant="outline"
                    role="combobox"
                    className={cn(
                      "w-full justify-between",
                      !field.value && "text-muted-foreground",
                    )}
                  >
                    {field.value ? (
                      <div className="flex items-center">
                        <Avatar className="rounded-md size-6 mr-2">
                          <AvatarImage src={generateAvatarUrl(selectedUsername || "")} />
                          <AvatarFallback className="text-xs font-light">
                            {getInitials(selectedUsername || "")}
                          </AvatarFallback>
                        </Avatar>

                        {customers.find((customer) => customer.id === field.value)?.name}
                      </div>
                    ) : (
                      "Select customer"
                    )}
                    <ChevronsUpDown className="opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
                <Command shouldFilter={false}>
                  <CommandInput
                    placeholder="Search by username..."
                    className="h-9"
                    value={search}
                    onValueChange={setSearch}
                  />
                  <CommandList>
                    {filteredCustomers.length === 0 ? (
                      <CommandEmpty>No customer found.</CommandEmpty>
                    ) : (
                      <CommandGroup>
                        <Virtuoso
                          style={{ height: 250 }}
                          data={filteredCustomers}
                          itemContent={(_, customer) => (
                            <CommandItem
                              value={customer.id.toString()}
                              key={customer.id}
                              onSelect={() => {
                                form.setValue("customer_id", customer.id)
                                setOpen(false)
                              }}
                            >
                              <div className="flex space-x-2 items-center">
                                <Avatar className="rounded-md">
                                  <AvatarImage
                                    src={generateAvatarUrl(customer.username)}
                                  />
                                  <AvatarFallback className="text-xs font-light">
                                    {getInitials(customer.username)}
                                  </AvatarFallback>
                                </Avatar>

                                <div>
                                  <div className="max-w-[210px] truncate font-medium">
                                    {customer.name}
                                  </div>
                                  <div className="max-w-[210px] truncate text-xs text-slate-500">
                                    {customer.username}
                                  </div>
                                </div>
                              </div>
                              <Check
                                className={cn(
                                  "ml-auto",
                                  customer.id === field.value
                                    ? "opacity-100"
                                    : "opacity-0",
                                )}
                              />
                            </CommandItem>
                          )}
                        />
                      </CommandGroup>
                    )}
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}
