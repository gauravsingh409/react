import { FormText } from "@/components/form";
import { FormWrapper } from "@/components/wrapper";
import { useLoginForm } from "../hooks/form-handler/useLoginForm";
import type { LoginSchemaType } from "../schemas";

export function LoginForm() {
    const { form, onSubmit, onError } = useLoginForm();

    return (
        <FormWrapper<LoginSchemaType>
            useFormMethods={form}
            onSubmit={onSubmit}
            onError={onError}
            id="login-form"
        >
            <FormText name="email" label="Email" />
            <FormText name="password" label="Password" />
        </FormWrapper>
    );
}
