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
			id: "lead",
			icon: "command",
			link: CONFIG.ROUTES.LEAD.ROOT,
			label: "Lead",
		},
	],
};
