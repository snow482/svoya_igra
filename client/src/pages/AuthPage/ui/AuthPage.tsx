import { AuthorizationForm } from "@/features/auth/AuthorizationForm";

// не используем props
export function AuthPage() {
    return (
        <>
            <h1>AuthPage</h1>
            <AuthorizationForm />
        </>
    );
}

