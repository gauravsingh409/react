"use client";

import type { TextareaHTMLAttributes } from "react";
import { type FieldValues, type Path, useFormContext } from "react-hook-form";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface FormTextareaProps<T extends FieldValues>
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	name: Path<T>;
	label?: string;
	helperText?: string;
}

export function FormTextarea<T extends FieldValues>({
	name,
	label,
	helperText,
	className,
	...props
}: FormTextareaProps<T>) {
	const { control } = useFormContext<T>();

	return (
		<FormField
			control={control}
			name={name}
			render={({ field, fieldState }) => (
				<FormItem className="flex w-full flex-col gap-y-1.5">
					{label && (
						<Label className={cn(fieldState.error && "text-destructive")}>
							{label}
						</Label>
					)}

					<FormControl>
						<Textarea className={className} {...field} {...props} />
					</FormControl>

					{helperText && !fieldState.error && (
						<FormDescription>{helperText}</FormDescription>
					)}

					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
