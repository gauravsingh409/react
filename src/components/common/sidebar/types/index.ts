import type { IconName } from "@/assets/icon/IconName";

// Define the SidebarItemId of all the routes objects in the application
export type SidebarItemId = 'dashboard' | "user" | "settings" | "profile" | "logout";

export interface SidebarItemInterface {
    id: SidebarItemId;
    icon: IconName;
    link?: string;
    label: string;
    onclick?: () => void;
}

export type SidebarSection = "first";
