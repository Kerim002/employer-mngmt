import {
  FileVideo2,
  GalleryVerticalEnd,
  LayoutDashboardIcon,
  LayoutPanelTop,
  MapPin,
  MessageSquareWarning,
  Pickaxe,
  Settings,
  Settings2Icon,
  Sprout,
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
      url: "/dashboard",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Işgärler",
      url: "/workers",
      icon: Pickaxe,
    },
    {
      title: "Harytlar",
      url: "/products",
      icon: Sprout,
      isDropdown: true,
      items: [
        {
          title: "Et önümleri",
          url: "/product/meat",
        },
        {
          title: "Süýt önümleri",
          url: "/product/milk",
        },
        {
          title: "Azyk harytlar",
          url: "/product/foodstuffs",
        },
      ],
    },
    {
      title: "Hasabat",
      url: "/attendance",
      icon: MessageSquareWarning,
    },
    {
      title: "Bölümler",
      url: "/departments",
      icon: LayoutPanelTop,
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
