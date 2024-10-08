import type Icons from "~/app/_components/ui/icons";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface MainNavItem extends NavItem {}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface SidebarNavItem extends NavItemWithChildren {}

interface NavsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const navsConfig: NavsConfig = {
  mainNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Config",
      href: "/dashboard/config",
    },
    {
      title: "Docs",
      href: "/dashboard/docs",
    },
  ],
  sidebarNav: [
    {
      title: "Dashboard",
      items: [
        {
          title: "Dashboard",
          href: "/dashboard",
          items: [],
        },
      ],
    },
    {
      title: "Configurations",
      items: [
        {
          title: "Workflow",
          href: "/dashboard/config",
          items: [],
        },
        {
          title: "Notifications",
          href: "/dashboard/config/notifications",
          items: [],
        },
        {
          title: "Templates",
          href: "/dashboard/config/templates",
          items: [],
        },
        {
          title: "Users",
          href: "/dashboard/config/users",
          items: [],
        },
        {
          title: "Roles and Permissions",
          href: "/dashboard/config/roles-permissions",
          items: [],
        },
      ],
    },
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
      ],
    },
  ],
};
