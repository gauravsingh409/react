import type { JSX, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Weight = "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";

type Size =
	| "xs"
	| "sm"
	| "base"
	| "lg"
	| "xl"
	| "2xl"
	| "3xl"
	| "4xl"
	| "5xl"
	| "6xl"
	| "7xl"
	| "8xl"
	| "9xl";

interface TypographyProps {
	children: ReactNode;
	className?: string;
	weight?: Weight;
	size?: Size | number;
}
const sizeMap: Record<Size, string> = {
	xs: "text-xs", // 12px
	sm: "text-sm", // 14px
	base: "text-base", // 16px
	lg: "text-lg", // 18px
	xl: "text-xl", // 20px
	"2xl": "text-2xl", // 24px
	"3xl": "text-3xl", // 30px
	"4xl": "text-4xl", // 36px
	"5xl": "text-5xl", // 48px
	"6xl": "text-6xl", // 60px
	"7xl": "text-7xl", // 72px
	"8xl": "text-8xl", // 96px
	"9xl": "text-9xl", // 128px
};

const weightMap: Record<Weight, string> = {
	light: "font-light",
	normal: "font-normal",
	medium: "font-medium",
	semibold: "font-semibold",
	bold: "font-bold",
	extrabold: "font-extrabold",
};

// ********** Get Text Size **********
const getSize = (size?: Size | number) => {
	if (typeof size === "number") return `text-[${size}px]`;
	if (size && sizeMap[size]) return sizeMap[size];
	return "text-[14px]";
};

// ********** Get Text Weight **********
const getWeight = (weight?: Weight) =>
	weight ? weightMap[weight] : "font-normal";

// ********** Create Typography **********
const createTypography =
	(Tag: keyof JSX.IntrinsicElements, baseClass: string) =>
	({ children, className, weight, size }: TypographyProps) => (
		<Tag
			className={cn(
				"font-outfit",
				baseClass,
				getSize(size),
				getWeight(weight),
				className,
			)}
		>
			{children}
		</Tag>
	);

// Headings
const H2 = createTypography("h2", "leading-10 tracking-[-0.096px]");
const H3 = createTypography("h3", "leading-8.5 tracking-[-0.048px]");
const H4 = createTypography(
	"h4",
	"text-xl font-semibold leading-8 tracking-[-0.02px]",
);
const H5 = createTypography("h5", "leading-7.5 tracking-[-0.02px]");
const H6 = createTypography(
	"h6",
	"text-lg font-semibold leading-5 tracking-normal",
);

// ********* Web/Body/Caption *************
const Caption = createTypography("p", "leading-4 tracking-[0.042px]");

// ********* Web/Body/Body-Reg-sm *************
const BodyRegularSmall = createTypography(
	"p",
	"text-sm font-normal leading-5.25 tracking-tight",
);

// ********* Web/Body/Body-med-sm *************
const BodyMediumSmall = createTypography(
	"p",
	"text-sm font-medium leading-5 tracking-normal",
);

const Generic = createTypography("p", "leading-5.25 tracking-[0.021px]");

export const Typography = {
	H2,
	H3,
	H4,
	H5,
	H6,
	Caption,
	BodyRegularSmall,
	BodyMediumSmall,
	Generic,
};
