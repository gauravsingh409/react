"use client";

import { useFormContext } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FormCheckboxProps {
	name: string;
	label?: string;
	helperText?: string;
	disabled?: boolean;
	className?: string;
}

const FormCheckbox = ({
	name,
	label,
	helperText,
	disabled,
	className,
}: FormCheckboxProps) => {
	const { control } = useFormContext();
	return (
		<FormField
			control={control}
			name={name}
			render={({ field, fieldState }) => (
				<FormItem className={cn("flex w-full flex-col gap-y-1.5", className)}>
					<div className="flex items-center gap-2">
						<FormControl>
							<Checkbox
								checked={field.value}
								onCheckedChange={field.onChange}
								disabled={disabled}
								aria-invalid={!!fieldState.error}
							/>
						</FormControl>

						{label && (
							<Label
								className={cn(
									"cursor-pointer font-normal",
									fieldState.error && "text-destructive",
									disabled && "cursor-not-allowed opacity-50",
								)}
								onClick={() => !disabled && field.onChange(!field.value)}
							>
								{label}
							</Label>
						)}
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

export default FormCheckbox;
