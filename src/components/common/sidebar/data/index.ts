import type { SidebarItemInterface, SidebarSection } from "../types";
import { CONFIG } from "@/config";

export type { SidebarItemInterface, SidebarSection };

export const allSidebarItems: Record<SidebarSection, SidebarItemInterface[]> = {
	first: [
		{
			id: "dashboard",
			icon: "command",
			link: CONFIG.ROUTES.DASHBOARD.ROOT,
			label: "Dashboard",
		},
		{
			id: "user",
			icon: "users",
			link: CONFIG.ROUTES.USER.ROOT,
			label: "User",
		},
		{
			id: "settings",
			icon: "command",
			link: CONFIG.ROUTES.SETTINGS.ROOT,
			label: "Settings",
		},
		{
			id: "profile",
			icon: "command",
			link: CONFIG.ROUTES.PROFILE.ROOT,
			label: "Profile",
		},
		{
			id: "logout",
			icon: "command",
			link: CONFIG.ROUTES.LOGOUT.ROOT,
			label: "Logout",
		}
	],
};
