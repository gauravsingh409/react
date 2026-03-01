import { memo } from "react";
import { Link, useLocation } from "react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { SidebarItemInterface } from "../data/SidebarData";
import { useDisclosure } from "@/hooks";
import { BaseIcon } from "@/assets/icon/BaseIcon";
import { Typography } from "@/components/ui/Typography";

const SidebarItem = ({ item }: { item: SidebarItemInterface }) => {
	const location = useLocation();
	// const logoutDialog = userDialog.useLogoutDialog();
	const hover = useDisclosure();

	const currentPath = location.pathname;

	const isActive =
		item.link &&
		(currentPath === item.link || currentPath.startsWith(`${item.link}/`));

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		// if (item.id === "logout") {
		// 	logoutDialog?.open();
		// 	return;
		// }

		// item.onclick?.();
	};

	return (
		<Link to={item.link ?? "#"} onClick={handleClick} className="w-full">
			<Button
				size="none"
				unstyled
				onMouseEnter={hover.open}
				onMouseLeave={hover.close}
				className="w-full rounded-lg p-1"
				variant={isActive ? "default" : hover.isOpen ? "disabled" : "none"}
			>
				<div className="flex w-full items-center gap-3 rounded-lg p-2">
					<BaseIcon
						name={item.icon}
						{...(isActive ? { fill: "#fff" } : { fill: "#101010" })}
						iconProps={{ size: "xs" }}
						wrapperProps={{ size: "sm", className: "p-0.5" }}
					/>

					<Typography.Generic
						weight="medium"
						size="sm"
						className={cn(
							"leading-5",
							isActive ? "text-neutral-10" : "text-neutral-100",
						)}
					>
						{item.label}
					</Typography.Generic>
				</div>
			</Button>
		</Link>
	);
};

export default memo(SidebarItem);
