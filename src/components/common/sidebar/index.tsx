import { allSidebarItems } from "./data/index.ts";
import type { SidebarItemInterface, SidebarSection as SidebarSectionType } from "./types";
import { LogoSection } from "./partials/LogoSection";
import SidebarSection from "./partials/SidebarSection";

const Sidebar = () => {
	const sidebarSections = Object.entries(allSidebarItems) as [
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
