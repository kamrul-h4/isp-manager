"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useRegister } from "@/hooks/rq/use-auth-query"
import type { RegisterPayload } from "@/types/register"

const step1Schema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  phone: z.string().min(1, "Phone is required"),
})

const step2Schema = z
  .object({
    email: z.string().email("Invalid email").optional(),
    gender: z.enum(["FEMALE", "MALE", "UNKNOWN"]).optional(),
    image: z.string().url().optional(),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirm_password: z.string().min(6, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  })

const formSchema = step1Schema.merge(step2Schema)

export function RegisterForm() {
  const [step, setStep] = useState(1)
  const { mutate: triggerRegister, isPending } = useRegister()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      gender: "UNKNOWN",
      image: "",
      password: "",
      confirm_password: "",
    },
  })

  function onNext() {
    // validate step1 fields before advancing
    form.trigger(["first_name", "last_name", "phone"]).then((ok) => {
      if (ok) setStep(2)
    })
  }

  function onBack() {
    setStep((s) => Math.max(1, s - 1))
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Build payload matching RegisterPayload (omit password fields)
    const payload: RegisterPayload = {
      first_name: values.first_name,
      last_name: values.last_name,
      phone: values.phone,
      email: values.email ?? "",
      gender: (values.gender as string) ?? "UNKNOWN",
      image: values.image ?? "",
    }

    triggerRegister(payload)
  }

  return (
    <Card className="w-full max-w-md border-0 bg-card/50 shadow-xl backdrop-blur">
      <CardHeader className="space-y-4 pb-6 text-center">
        <div>
          <h2 className="font-semibold text-2xl text-foreground">Create an account</h2>
          <p className="mt-1 text-muted-foreground text-sm">
            Register a new Mikrolink account
          </p>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {step === 1 && (
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end gap-2">
                  <Button type="button" onClick={onNext} className="h-10">
                    Next
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={(v) => field.onChange(v)}
                          value={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="FEMALE">Female</SelectItem>
                            <SelectItem value="MALE">Male</SelectItem>
                            <SelectItem value="UNKNOWN">Prefer not to say</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirm_password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm password</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-between gap-2">
                  <Button type="button" variant="ghost" onClick={onBack} className="h-10">
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="h-10"
                    disabled={isPending}
                    loading={isPending}
                  >
                    Register
                  </Button>
                </div>
              </div>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
