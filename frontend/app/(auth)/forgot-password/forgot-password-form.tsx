"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { Activity, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
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
import { useForgotPassword } from "@/hooks/rq/use-auth-query"

const phoneSchema = z.object({ phone: z.string().min(6, "Enter a valid phone number") })

const verifySchema = z
  .object({
    phone: z.string().min(6, "Enter a valid phone number"),
    otp: z.string().min(1, "Enter the OTP"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirm_password: z.string().min(6, "Confirm Password must be at least 6 characters"),
  })
  .refine((d) => d.password === d.confirm_password, {
    path: ["confirm_password"],
    message: "Passwords don't match",
  })

export function ForgotPasswordForm() {
  const [step, setStep] = useState<"request" | "verify">("request")

  const router = useRouter()

  const { mutate: triggerForgotPassword, isPending } = useForgotPassword()

  const requestForm = useForm<z.infer<typeof phoneSchema>>({
    resolver: zodResolver(phoneSchema),
    defaultValues: { phone: "" },
  })

  const verifyForm = useForm<z.infer<typeof verifySchema>>({
    resolver: zodResolver(verifySchema),
    defaultValues: { otp: "", password: "", confirm_password: "", phone: "" },
  })

  function onRequest(values: z.infer<typeof phoneSchema>) {
    triggerForgotPassword(values, {
      onSuccess: () => {
        toast.success("OTP sent to user phone if it exists")
        setStep("verify")
        verifyForm.setValue("phone", values.phone)
      },
      onError: () => {
        toast.error("Failed to send OTP. Please try again")
      },
    })
  }

  function onVerify(values: z.infer<typeof verifySchema>) {
    triggerForgotPassword(values, {
      onSuccess: () => {
        toast.success("Password reset successfully. You can now log in.")
        router.push("/login")

        // verifyForm.reset()
        // requestForm.reset()
        // setStep("request")
      },
      onError: () => {
        toast.error("Failed to verify OTP or reset password. Please try again")
      },
    })
  }

  return (
    <Card className="w-full max-w-md border-0 bg-card/50 shadow-xl backdrop-blur">
      <CardHeader className="space-y-4 pb-6 text-center">
        <div>
          <h2 className="font-semibold text-2xl text-foreground">Forgot Password</h2>
          <p className="mt-1 text-muted-foreground text-sm">
            We will send an OTP to your phone to reset your password.
          </p>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <Activity mode={step === "request" ? "visible" : "hidden"}>
          <Form {...requestForm}>
            <form onSubmit={requestForm.handleSubmit(onRequest)} className="space-y-6">
              <FormField
                control={requestForm.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="font-medium text-sm">Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        className="h-11"
                        placeholder="e.g. +8801XXXXXXXXX"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="h-11 w-full font-medium text-base"
                disabled={isPending}
              >
                {isPending ? "Sending..." : "Send OTP"}
              </Button>
            </form>
          </Form>
        </Activity>

        <Activity mode={step !== "request" ? "visible" : "hidden"}>
          <Form {...verifyForm}>
            <form onSubmit={verifyForm.handleSubmit(onVerify)} className="space-y-6">
              <FormField
                control={verifyForm.control}
                name="otp"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="font-medium text-sm">OTP</FormLabel>
                    <FormControl>
                      <Input
                        className="h-11"
                        placeholder="Enter OTP"
                        value={field.value ?? ""}
                        onChange={(e) => field.onChange(e.target.value)}
                        onBlur={field.onBlur}
                        name={field.name}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={verifyForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="font-medium text-sm">New Password</FormLabel>
                    <FormControl>
                      <Input
                        className="h-11"
                        type="password"
                        value={field.value ?? ""}
                        onChange={(e) => field.onChange(e.target.value)}
                        onBlur={field.onBlur}
                        name={field.name}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={verifyForm.control}
                name="confirm_password"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="font-medium text-sm">
                      Confirm New Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-11"
                        type="password"
                        value={field.value ?? ""}
                        onChange={(e) => field.onChange(e.target.value)}
                        onBlur={field.onBlur}
                        name={field.name}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep("request")}
                >
                  Back
                </Button>
                <Button type="submit" className="ml-auto" disabled={isPending}>
                  {isPending ? "Verifying..." : "Verify & Reset"}
                </Button>
              </div>
            </form>
          </Form>
        </Activity>
      </CardContent>
    </Card>
  )
}
