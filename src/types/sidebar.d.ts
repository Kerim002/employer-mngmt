type SidebarItemSchema = {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
};
type SidebarUserItemSchema = {
  name: string;
  email: string;
  avatar: string;
};
type SettingsSidebarItemSchema = Omit<SidebarItemSchema, "isActive">;
