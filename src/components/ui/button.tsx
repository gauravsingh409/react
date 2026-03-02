import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import type * as React from "react";
import { cn } from "@/lib/utils";

const buttonBase = cn(
  // Layout
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap",

  // Shape
  "rounded-lg",

  // Interaction
  "cursor-pointer transition-colors",

  // Focus
  "outline-none",

  // Disabled state
  "disabled:cursor-not-allowed disabled:opacity-50",
);

const buttonVariants = cva("", {
  variants: {
    variant: {
      none: "",
      default: "bg-primary text-white hover:bg-primary/90",
      destructive:
        "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
      outline:
        "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost:
        "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
      link: "text-primary underline-offset-4 hover:underline",
      disabled: "bg-neutral-400 text-neutral-800",
    },
    size: {
      none: "",
      default: "px-4 py-2 min-w-[120px]",
      xs: "px-2 py-2 text-xs min-w-[100px]",
      sm: "px-4 py-3 text-sm min-w-[140px]",
      lg: "px-4 py-3 text-base min-w-[180px]",
      icon: "size-9",
      full: "px-4 py-3 w-full",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    unstyled?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  unstyled = false,
  children,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(
        !unstyled && buttonBase,
        buttonVariants({ variant, size }),
        className,
      )}
      {...props}
    >
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </Comp>
  );
}

export { Button, buttonVariants };
