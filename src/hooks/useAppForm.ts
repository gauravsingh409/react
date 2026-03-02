import { zodResolver } from "@hookform/resolvers/zod";
import { type FieldValues, type UseFormProps, useForm } from "react-hook-form";
import type { ZodType } from "zod";

interface UseAppFormProps<T extends FieldValues> extends UseFormProps<T> {
	schema?: ZodType<T, T>;
}

export function useAppForm<T extends FieldValues>({
	schema,
	...props
}: UseAppFormProps<T>) {
	return useForm<T>({
		...props,
		resolver: schema ? zodResolver(schema) : undefined,
		mode: "onTouched",
	});
}
