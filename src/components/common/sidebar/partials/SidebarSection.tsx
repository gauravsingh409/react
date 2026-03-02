import { memo } from "react";
import { cn } from "@/lib/utils";
import type { SidebarItemInterface } from "../types";
import SidebarItem from "./SidebarItem";

interface Props {
	data: SidebarItemInterface[];
}

function SidebarSection({ data }: Props) {
	return (
		<div
			className={cn(
				"px-4 py-6",
				"border-neutral-30 border-b",
				"flex flex-col gap-y-2",
			)}
		>
			{data.map((item) => (
				<SidebarItem key={item.id} item={item} />
			))}
		</div>
	);
}

export default memo(SidebarSection);
