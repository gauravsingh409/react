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
            className=""
        >
            <div className="space-y-5 p-5">
                <FormText name="email" label="Email" />
                <FormText name="password" label="Password" />

                <Button className="mt-10 w-full" type="submit">
                    Login
                </Button>
            </div>
        </FormWrapper>
    );
}
