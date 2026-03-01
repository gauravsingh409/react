import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ICONS, type IconName } from "./IconName";
import { TooltipWrapper } from "@/components/wrapper";

// ===== TYPES =====
type IconSize = "xs" | "sm" | "md" | "lg" | number;

const SIZE_MAP = {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
} as const;

function resolveSize(size: IconSize): number {
    return typeof size === "number" ? size : SIZE_MAP[size];
}

// ===== SLOT PROP INTERFACES =====
// Each slot has its own dedicated props — full independent control
interface IconSlotProps extends Omit<React.SVGProps<SVGSVGElement>, "size"> {
    size?: IconSize; // controls the svg width/height
    className?: string;
}

interface WrapperSlotProps extends React.HTMLAttributes<HTMLSpanElement> {
    size?: IconSize; // controls the span width/height
    className?: string;
}

interface ButtonSlotProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

// ===== BASE ICON PROPS =====
interface BaseIconProps {
    name: IconName;
    fill?: string;

    // Independent slot control
    iconProps?: IconSlotProps;
    wrapperProps?: WrapperSlotProps;
}

// ===== ICON BUTTON PROPS =====
interface IconButtonProps extends BaseIconProps {
    label: string;
    tooltip?: string;
    onClick?: () => void;
    buttonProps?: ButtonSlotProps;
}

// ===== ICON WRAPPER (internal) =====
function IconWrapper({
    size = "md",
    children,
    className,
    ...props
}: WrapperSlotProps & { children: React.ReactElement }) {
    const dimension = resolveSize(size);

    return (
        <span
            className={cn(
                "inline-flex shrink-0 items-center justify-center",
                className,
            )}
            style={{ width: dimension, height: dimension }}
            {...props}
        >
            {children}
        </span>
    );
}

// ===== DECORATIVE ICON =====
export function BaseIcon({
    name,
    fill = "currentColor",
    iconProps,
    wrapperProps,
}: BaseIconProps) {
    const IconComponent = ICONS[name];

    const {
        size: iconSize,
        className: iconClassName,
        ...restIconProps
    } = iconProps ?? {};

    const { size: wrapperSize = "md", ...restWrapperProps } = wrapperProps ?? {};

    const resolvedIconSize = iconSize ? resolveSize(iconSize) : undefined;

    return (
        <IconWrapper size={wrapperSize} {...restWrapperProps}>
            <IconComponent
                className={cn("h-full w-full shrink-0", iconClassName)}
                fill={fill}
                width={resolvedIconSize}
                height={resolvedIconSize}
                {...restIconProps}
            />
        </IconWrapper>
    );
}

// ===== INTERACTIVE ICON BUTTON =====
export function BaseIconButton({
    name,
    fill = "currentColor",
    label,
    tooltip,
    onClick,
    iconProps,
    wrapperProps,
    buttonProps,
}: IconButtonProps) {
    const IconComponent = ICONS[name];

    const {
        size: iconSize,
        className: iconClassName,
        ...restIconProps
    } = iconProps ?? {};

    const { size: wrapperSize = "md", ...restWrapperProps } = wrapperProps ?? {};

    const { className: buttonClassName, ...restButtonProps } = buttonProps ?? {};

    const resolvedIconSize = iconSize ? resolveSize(iconSize) : undefined;

    return (
        <TooltipWrapper content={tooltip ?? label}>
            <Button
                aria-label={label}
                unstyled
                variant="none"
                size="none"
                onClick={onClick}
                className={cn(
                    "flex cursor-pointer items-center justify-center overflow-hidden",
                    buttonClassName,
                )}
                {...restButtonProps}
            >
                <IconWrapper size={wrapperSize} {...restWrapperProps}>
                    <IconComponent
                        className={cn("h-full w-full overflow-hidden", iconClassName)}
                        width={resolvedIconSize}
                        height={resolvedIconSize}
                        fill={fill}
                        {...restIconProps}
                    />
                </IconWrapper>
            </Button>
        </TooltipWrapper>
    );
}
