"use client";

import { Eye, EyeOff } from "lucide-react";
import * as React from "react";
import { type FieldValues, type Path, useFormContext } from "react-hook-form";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FormTextProps<T extends FieldValues>
	extends React.InputHTMLAttributes<HTMLInputElement> {
	name: Path<T>;
	label?: string;
	helperText?: string;
	IconLeft?: React.ElementType;
	IconRight?: React.ElementType;
}

export function FormText<T extends FieldValues>({
	name,
	label,
	helperText,
	className,
	type,
	IconLeft,
	IconRight,
	...props
}: FormTextProps<T>) {
	const { control } = useFormContext<T>();

	const [showPassword, setShowPassword] = React.useState(false);

	const isPassword = type === "password";
	const inputType = isPassword && showPassword ? "text" : type;
	const LeftIcon = IconLeft;
	const RightIcon = IconRight;

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
						<Input
							leftIcon={
								LeftIcon ? (
									<LeftIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
								) : undefined
							}
							rightIcon={
								isPassword ? (
									<button
										type="button"
										onClick={() => setShowPassword((prev) => !prev)}
										className="flex h-full w-full cursor-pointer items-center justify-center"
										aria-label={
											showPassword ? "Hide password" : "Show password"
										}
									>
										{showPassword ? (
											<EyeOff className="h-4 w-4 text-muted-foreground" />
										) : (
											<Eye className="h-4 w-4 text-muted-foreground" />
										)}
									</button>
								) : RightIcon ? (
									<RightIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
								) : undefined
							}
							inputProps={{
								...field,
								...props,
								type: inputType,
							}}
						/>
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
