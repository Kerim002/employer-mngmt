import {
  FileVideo2,
  GalleryVerticalEnd,
  LayoutDashboardIcon,
  MapPin,
  Settings,
  Settings2Icon,
} from "lucide-react";

export const sidebarData = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Statistika",
      url: "/",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Işgärler",
      url: "/workers",
      icon: FileVideo2,
    },
    {
      title: "Hasabat",
      url: "/attendance",
      icon: Settings,
    },
    {
      title: "Bölümler",
      url: "/departments",
      icon: Settings,
    },

    {
      title: "Managment",
      url: "/users",
      icon: Settings,
    },
  ],
};
export const settingsSidebarData = [
  {
    title: "Order",
    url: "/settings/order",
    icon: Settings2Icon,
  },
  {
    title: "FAQ",
    url: "/settings/faq",
    icon: Settings2Icon,
  },
  {
    title: "About",
    url: "/settings/about",
    icon: Settings2Icon,
  },
  {
    title: "Region",
    url: "/settings/region",
    icon: MapPin,
  },
];
