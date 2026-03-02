import {
	type FieldValues,
	FormProvider,
	type SubmitErrorHandler,
	type SubmitHandler,
	type UseFormReturn,
} from "react-hook-form";

interface FormWrapperProps<T extends FieldValues> {
	children: React.ReactNode;
	useFormMethods: UseFormReturn<T>;
	onSubmit: SubmitHandler<T>;
	onError?: SubmitErrorHandler<T>;
	className?: string;
	id?: string;
}

export const FormWrapper = <T extends FieldValues>({
	children,
	useFormMethods,
	onSubmit,
	onError,
	className,
	id,
}: FormWrapperProps<T>) => {
	const {
		handleSubmit,
		formState: { isSubmitting },
	} = useFormMethods;

	return (
		<FormProvider {...useFormMethods}>
			<form
				id={id}
				onSubmit={handleSubmit(onSubmit, onError)}
				noValidate
				className={className}
			>
				<fieldset disabled={isSubmitting} className={'contents'}>
					{children}
				</fieldset>
			</form>
		</FormProvider>
	);
};

