import { useAppForm } from "@/hooks";
import type { SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { LoginSchema, type LoginSchemaType } from "../../schemas";
import { useLoginMutation } from "../mutation";

export const useLoginForm = () => {
    const loginMutation = useLoginMutation();

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
        loginMutation.mutate({ email: data.email, password: data.password });
    };

    const onError: SubmitErrorHandler<LoginSchemaType> = (errors) => {
        console.error(errors);
    };

    return { form, onSubmit, onError };
};

