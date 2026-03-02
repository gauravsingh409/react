import { FormText } from "@/components/form";
import { FormWrapper } from "@/components/wrapper";
import { useLoginForm } from "../hooks/form-handler/useLoginForm";
import type { LoginSchemaType } from "../schemas";
import { Button } from "@/components/ui/button";

export function LoginForm() {
    const { form, onSubmit, onError } = useLoginForm();

    return (
        <FormWrapper<LoginSchemaType>
            useFormMethods={form}
            onSubmit={onSubmit}
            onError={onError}
            id="login-form"
            className="flex flex-col gap-y-10 p-10 shadow-xs border border-gray-200 rounded-2xl"
        >
            <FormText name="email" label="Email" />
            <FormText name="password" label="Password" />

            <Button className="mt-10 w-full" type="submit">
                Login
            </Button>
        </FormWrapper>
    );
}
