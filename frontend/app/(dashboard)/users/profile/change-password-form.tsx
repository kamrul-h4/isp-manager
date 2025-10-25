"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { PasswordInput } from "@/components/ui/password-input"
import { useChangePassword } from "@/hooks/rq/use-users-query"

const schema = z
  .object({
    old_password: z.string().min(1, "Required"),
    new_password: z.string().min(6, "Password must be at least 6 characters"),
    confirm_new_password: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters"),
  })
  .refine((d) => d.new_password === d.confirm_new_password, {
    path: ["confirm_new_password"],
    message: "Passwords don't match",
  })

export function ChangePasswordForm() {
  const form = useForm<z.infer<typeof schema>>({ resolver: zodResolver(schema) })
  const { mutate, isPending } = useChangePassword()

  function onSubmit(values: z.infer<typeof schema>) {
    mutate(values, {
      onSuccess: () => {
        form.reset()
      },
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="old_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current password</FormLabel>
              <FormControl>
                <PasswordInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="new_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New password</FormLabel>
              <FormControl>
                <PasswordInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirm_new_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm new password</FormLabel>
              <FormControl>
                <PasswordInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button type="submit" loading={isPending} disabled={isPending}>
            Change password
          </Button>
        </div>
      </form>
    </Form>
  )
}
