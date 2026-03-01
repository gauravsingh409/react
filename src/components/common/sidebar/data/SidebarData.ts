import type { IconName } from "@/assets/icon/IconName";
import type { GetMeTypes } from "@/features/auth/types";

// Define the SidebarItemId of all the routes objects in the application
export type SidebarItemId =
	// Auth
	| "logout"

	// main
	| "dashboard"
	| "organization-management"
	| "user-management"
	| "automation-control"
	| "chat-control"
	| "features-modules"
	| "analytics-report"
	| "security-access-log"
	| "notification"

	// plans and billing
	| "plan-billing-layout"

	// setting
	| "setting-layout"
	| "setting-main"
	| "setting-two-fa"
	| "help-support";

export interface SidebarItemInterface {
	id: SidebarItemId;
	icon: IconName;
	link?: string;
	label: string;
	onclick?: () => void;
}

export type SidebarSection = "first" | "second" | "third" | "fourth" | "fifth";

// Define the role-based access control mapping
export const RoleBasedAccessControl: Record<GetMeTypes.UserRole, SidebarItemId[]> = {
	admin: [
		"logout",
		"dashboard",
		"organization-management",
		"user-management",
		"plan-billing-layout",
		"automation-control",
		"chat-control",
		"features-modules",
		"analytics-report",
		"security-access-log",
		"notification",
		"setting-main",
		"setting-two-fa",
		"setting-layout",
		"help-support",
	],
	user: [
		"logout",
		"dashboard",
		"plan-billing-layout",
		"automation-control",
		"chat-control",
		"features-modules",
		"analytics-report",
		"security-access-log",
		"notification",
		"setting-main",
		"setting-two-fa",
	],
	guest: ["logout", "help-support"],

} as const;

const allSidebarItems: Record<SidebarSection, SidebarItemInterface[]> = {
	first: [

	],
	second: [

	],
	third: [

	],
	fourth: [

	],
	fifth: [
		{
			id: "logout",
			icon: "signout",
			label: "Logout",
		},
	],
};

export function getSidebarByRole(role: GetMeTypes.UserRole) {
	const allowedIds = RoleBasedAccessControl[role];

	const filteredSidebar = Object.entries(allSidebarItems).reduce(
		(acc, [section, items]) => {
			const filteredItems = items.filter((item) =>
				allowedIds.includes(item.id),
			);

			if (filteredItems.length > 0) {
				acc[section as SidebarSection] = filteredItems;
			}

			return acc;
		},
		{} as Record<SidebarSection, SidebarItemInterface[]>,
	);

	return filteredSidebar;
}
