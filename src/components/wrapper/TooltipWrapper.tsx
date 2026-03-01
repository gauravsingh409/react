import type { ReactNode } from "react";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

interface TooltipWrapperProps {
	content: ReactNode;
	children: ReactNode;
	className?: string;
	side?: "top" | "bottom" | "left" | "right";
	align?: "start" | "center" | "end";
	open?: boolean;
}

export function TooltipWrapper({
	content,
	children,
	className,
	side = "top",
	align = "center",
	open,
}: TooltipWrapperProps) {
	return (
		<Tooltip open={open}>
			<TooltipTrigger asChild>{children}</TooltipTrigger>
			<TooltipContent side={side} align={align} className={className}>
				{content}
			</TooltipContent>
		</Tooltip>
	);
}
