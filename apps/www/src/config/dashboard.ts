import { DashboardConfig } from "@/types";

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    // {
    //   title: "Documentation",
    //   href: "/docs",
    //   disabled: true,
    // },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "home",
    },
    // {
    //   title: "Dev Testing",
    //   href: "/dev",
    //   icon: "laptop",
    // },
    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: "billing",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
    {
      title: "Placeholder Names",
      href: "/dashboard/channels",
    },
    {
      title: "Marketing",
      href: "/dashboard/channels/marketing",
    },
    {
      title: "Sales",
      href: "/dashboard/channels/sales",
    },
  ],
};
