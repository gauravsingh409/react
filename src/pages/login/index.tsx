import { LoginForm } from "@/features/auth/components/LoginForm";

export default function Login() {
    return (
        <div className="h-screen flex items-center justify-center bg-background">

            <div className="rounded-lg shadow-md max-w-md">
                <LoginForm />
            </div>

        </div>
    );
}