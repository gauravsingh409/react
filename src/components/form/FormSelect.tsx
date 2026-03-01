"use client";

import type * as React from "react";
import { useFormContext } from "react-hook-form";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export interface SelectOption {
	value: string;
	label: string;
	disabled?: boolean;
}

interface FormSelectProps
	extends React.SelectHTMLAttributes<HTMLSelectElement> {
	name: string;
	label?: string;
	helperText?: string;
	options: SelectOption[];
	placeholder?: string;
	Icon?: React.ElementType;
	disabled?: boolean;
	required?: boolean;
	loading?: boolean;
	emptyMessage?: string;
	onValueChange?: (value: string) => void;
}

const FormSelect = ({
	name,
	label,
	helperText,
	options,
	placeholder = "Select an option",
	Icon,
	disabled,
	required,
	loading = false,
	emptyMessage = "No options available",
	onValueChange,
	className,
	// ...props
}: FormSelectProps) => {
	const { control } = useFormContext();

	return (
		<FormField
			control={control}
			name={name}
			render={({ field, fieldState }) => (
				<FormItem className="flex w-full flex-col gap-y-1.5">
					{label && (
						<FormLabel
							className={cn(
								fieldState.error && "text-destructive",
								required &&
									"after:ml-1 after:text-destructive after:content-['*']",
							)}
						>
							{label}
						</FormLabel>
					)}

					<div className="relative">
						{Icon && (
							<div className="absolute top-1/2 left-3 -translate-y-1/2">
								<Icon className="h-4 w-4 text-muted-foreground" />
							</div>
						)}

						<Select
							disabled={disabled || loading}
							onValueChange={(value) => {
								field.onChange(value);
								onValueChange?.(value);
							}}
							defaultValue={field.value}
							value={field.value}
						>
							<FormControl>
								<SelectTrigger
									className={cn(
										Icon && "pl-9",
										fieldState.error &&
											"border-destructive focus:ring-destructive",
										disabled && "cursor-not-allowed opacity-50",
										className,
										"w-full py-5",
									)}
								>
									<SelectValue placeholder={placeholder} />
								</SelectTrigger>
							</FormControl>

							<SelectContent>
								{loading ? (
									<div className="flex items-center justify-center py-6">
										<div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
										<span className="ml-2 text-muted-foreground text-sm">
											Loading...
										</span>
									</div>
								) : options.length === 0 ? (
									<div className="py-6 text-center text-muted-foreground text-sm">
										{emptyMessage}
									</div>
								) : (
									options.map((option) => (
										<SelectItem
											key={option.value}
											value={option.value}
											disabled={option.disabled}
										>
											{option.label}
										</SelectItem>
									))
								)}
							</SelectContent>
						</Select>
					</div>

					{helperText && !fieldState.error && (
						<FormDescription>{helperText}</FormDescription>
					)}

					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default FormSelect;

// *************** Independent Select (without react-hook-form) ***************
export interface SelectOption {
	value: string;
	label: string;
	disabled?: boolean;
}

interface IndependentSelectProps {
	value?: string;
	onValueChange: (value: string) => void;
	options: SelectOption[];
	label?: string;
	placeholder?: string;
	helperText?: string;
	Icon?: React.ElementType;
	disabled?: boolean;
	loading?: boolean;
	emptyMessage?: string;
	className?: string;
	error?: string; // Manual error string since we don't have FormMessage
	required?: boolean;
}

export const SelectField = ({
	value,
	onValueChange,
	options,
	label,
	placeholder = "Select an option",
	helperText,
	Icon,
	disabled,
	loading = false,
	emptyMessage = "No options available",
	className,
	error,
	required,
}: IndependentSelectProps) => {
	return (
		<div className={cn(`flex w-full max-w-sm flex-col gap-y-1.5`, className)}>
			{label && (
				<Label
					className={cn(
						error && "text-destructive",
						required && "after:ml-1 after:text-destructive after:content-['*']",
					)}
				>
					{label}
				</Label>
			)}

			<div className="relative">
				{Icon && (
					<div className="absolute top-1/2 left-3 z-10 -translate-y-1/2">
						<Icon className="h-4 w-4 text-muted-foreground" />
					</div>
				)}

				<Select
					value={value}
					onValueChange={onValueChange}
					disabled={disabled || loading}
				>
					<SelectTrigger
						className={cn(
							Icon && "pl-9",
							error && "border-destructive focus:ring-destructive",
							className,
							"w-full py-5",
						)}
					>
						<SelectValue placeholder={placeholder} />
					</SelectTrigger>

					<SelectContent>
						{loading ? (
							<div className="flex items-center justify-center py-6">
								<div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
								<span className="ml-2 text-muted-foreground text-sm">
									Loading...
								</span>
							</div>
						) : options.length === 0 ? (
							<div className="py-6 text-center text-muted-foreground text-sm">
								{emptyMessage}
							</div>
						) : (
							options.map((option) => (
								<SelectItem
									key={option.value}
									value={option.value}
									disabled={option.disabled}
								>
									{option.label}
								</SelectItem>
							))
						)}
					</SelectContent>
				</Select>
			</div>

			{error ? (
				<p className="font-medium text-[0.8rem] text-destructive">{error}</p>
			) : (
				helperText && (
					<p className="text-[0.8rem] text-muted-foreground">{helperText}</p>
				)
			)}
		</div>
	);
};
