import {
	type FieldValues,
	FormProvider,
	type UseFormReturn,
} from "react-hook-form";
import { cn } from "@/lib/utils";

interface AppFormProps<T extends FieldValues> {
	children: React.ReactNode;
	useFormMethods: UseFormReturn<T>;
	onSubmit: (data: T) => void | Promise<void>;
	className?: string;
	id?: string;
}

export const FormWrapper = <T extends FieldValues>({
	children,
	useFormMethods,
	onSubmit,
	className,
	id,
}: AppFormProps<T>) => {
	return (
		<FormProvider {...useFormMethods}>
			<form id={id} onSubmit={useFormMethods.handleSubmit(onSubmit)} noValidate>
				<fieldset
					disabled={useFormMethods.formState.isSubmitting}
					className={cn("contents", className)}
				>
					{children}
				</fieldset>
			</form>
		</FormProvider>
	);
};

