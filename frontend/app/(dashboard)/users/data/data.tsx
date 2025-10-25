import {
  BriefcaseIcon,
  CircleIcon,
  CrownIcon,
  MarsIcon,
  ShieldCheckIcon,
  ShieldIcon,
  UserIcon,
  UsersIcon,
  VenusAndMarsIcon,
  VenusIcon,
} from "lucide-react"

export const genders = [
  {
    value: "MALE",
    label: "Male",
    icon: MarsIcon,
  },
  {
    value: "FEMALE",
    label: "Female",
    icon: VenusIcon,
  },
  {
    value: "UNKNOWN",
    label: "Unknown",
    icon: VenusAndMarsIcon,
  },
]

export const kinds = [
  {
    label: "Admin",
    value: "ADMIN",
    icon: ShieldIcon,
  },
  {
    label: "Customer",
    value: "CUSTOMER",
    icon: UserIcon,
  },
  {
    label: "Manager",
    value: "MANAGER",
    icon: BriefcaseIcon,
  },
  {
    label: "Staff",
    value: "STAFF",
    icon: UsersIcon,
  },
  {
    label: "Super Admin",
    value: "SUPER_ADMIN",
    icon: ShieldCheckIcon,
  },
  {
    label: "Owner",
    value: "OWNER",
    icon: CrownIcon,
  },
  {
    label: "Other",
    value: "OTHER",
    icon: CircleIcon,
  },
]
