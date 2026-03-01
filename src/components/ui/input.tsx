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
        "relative flex items-center rounded-sm border border-neutral-30 p-2 shadow-xs",
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
          "focus:outline-none focus:ring-0",
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
