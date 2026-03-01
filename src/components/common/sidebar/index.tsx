import { useAuthStore } from "@/store";
import {
	getSidebarByRole,
	type SidebarItemInterface,
	type SidebarSection as SidebarSectionType,
} from "./data/SidebarData";
import { LogoSection } from "./partials/LogoSection";
import SidebarSection from "./partials/SidebarSection";

const Sidebar = () => {
	const { user } = useAuthStore();
	if (!user) return null;

	const sidebarItems = getSidebarByRole(user?.role);

	const sidebarSections = Object.entries(sidebarItems) as [
		SidebarSectionType,
		SidebarItemInterface[],
	][];

	return (
		<aside className="h-full w-72 shrink-0 overflow-y-auto border-neutral-30 border-r py-4 pr-1.5">
			<LogoSection />

			{sidebarSections.map(([sectionName, section]) => (
				<SidebarSection key={sectionName} data={section} />
			))}
		</aside>
	);
};

export default Sidebar;
