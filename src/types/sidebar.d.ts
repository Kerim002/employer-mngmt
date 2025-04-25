type SidebarItemSchema = {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  isDropdown?: boolean;
  items?: {
    title: string;
    url: string;
  }[];
};
type SidebarUserItemSchema = {
  name: string;
  email: string;
  avatar: string;
};
type SettingsSidebarItemSchema = Omit<SidebarItemSchema, "isActive">;
