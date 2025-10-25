import {
  BanknoteIcon,
  CalendarIcon,
  CircleCheckIcon,
  CircleDollarSignIcon,
  CircleXIcon,
  CreditCardIcon,
  GlobeIcon,
  LandmarkIcon,
  SmartphoneIcon,
  WalletIcon,
} from "lucide-react"

export const paymentMethods = [
  {
    value: "BANK_TRANSFER",
    label: "Bank Transfer",
    icon: LandmarkIcon,
  },
  {
    value: "BKASH",
    label: "Bkash",
    icon: SmartphoneIcon,
  },
  {
    value: "CASH",
    label: "Cash",
    icon: BanknoteIcon,
  },
  {
    value: "NAGAD",
    label: "Nagad",
    icon: WalletIcon,
  },
  {
    value: "MOBILE_BANKING",
    label: "Mobile Banking",
    icon: SmartphoneIcon,
  },
  {
    value: "ONLINE_PAYMENT",
    label: "Online Payment",
    icon: GlobeIcon,
  },
  {
    value: "ROCKET",
    label: "Rocket",
    icon: CreditCardIcon,
  },
  {
    value: "OTHER",
    label: "Other",
    icon: CircleDollarSignIcon,
  },
]

export const paymentStatuses = [
  {
    label: "Paid",
    value: "true",
    icon: CircleCheckIcon,
  },
  {
    label: "Unpaid",
    value: "false",
    icon: CircleXIcon,
  },
]

export const months = [
  { value: "JANUARY", label: "January", icon: CalendarIcon },
  { value: "FEBRUARY", label: "February", icon: CalendarIcon },
  { value: "MARCH", label: "March", icon: CalendarIcon },
  { value: "APRIL", label: "April", icon: CalendarIcon },
  { value: "MAY", label: "May", icon: CalendarIcon },
  { value: "JUNE", label: "June", icon: CalendarIcon },
  { value: "JULY", label: "July", icon: CalendarIcon },
  { value: "AUGUST", label: "August", icon: CalendarIcon },
  { value: "SEPTEMBER", label: "September", icon: CalendarIcon },
  { value: "OCTOBER", label: "October", icon: CalendarIcon },
  { value: "NOVEMBER", label: "November", icon: CalendarIcon },
  { value: "DECEMBER", label: "December", icon: CalendarIcon },
]
