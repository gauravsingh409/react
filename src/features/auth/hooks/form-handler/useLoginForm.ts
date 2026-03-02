import { useAppForm } from "@/hooks";
import type { SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { LoginSchema, type LoginSchemaType } from "../../schemas";

export const useLoginForm = () => {
    const form = useAppForm<LoginSchemaType>({
        defaultValues: {
            email: "",
            password: "",
        },
        schema: LoginSchema,
    });

    // Place your mutation call here e.g. const { mutate } = useLoginMutation()
    const onSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
        console.log(data);
    };

    const onError: SubmitErrorHandler<LoginSchemaType> = (errors) => {
        console.error(errors);
    };

    return { form, onSubmit, onError };
};

