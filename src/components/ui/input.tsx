import type * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

function Input({ leftIcon, rightIcon, wrapperProps, inputProps }: InputProps) {
  const { className: wrapperClassName, ...restWrapperProps } =
    wrapperProps || {};
  const {
    type = "text",
    className: inputClassName,
    ...restInputProps
  } = inputProps || {};
  return (
    <div
      className={cn(
        "relative flex items-center rounded-sm p-2 border border-neutral-300",
        wrapperClassName,
      )}
      {...restWrapperProps}
    >
      {leftIcon && (
        <div className="absolute top-1/2 left-4 flex size-6 -translate-y-1/2 items-center justify-center overflow-hidden">
          {leftIcon}
        </div>
      )}

      <input
        type={type}
        data-slot="input"
        className={cn(
          "w-full bg-transparent",
          "outline-none border-none ring-0 shadow-none",
          "hover:outline-none hover:border-none hover:ring-0 hover:shadow-none",
          "focus:outline-none focus:border-none focus:ring-0 focus:shadow-none",
          "focus-visible:outline-none focus-visible:border-none focus-visible:ring-0 focus-visible:shadow-none",
          "active:outline-none active:border-none active:ring-0 active:shadow-none",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          leftIcon && "pl-10",
          rightIcon && "pr-10",
          inputClassName,
        )}
        {...restInputProps}
      />

      {rightIcon && (
        <div className="absolute top-1/2 right-4 flex size-6 -translate-y-1/2 items-center justify-center overflow-hidden">
          {rightIcon}
        </div>
      )}
    </div>
  );
}

export { Input };
