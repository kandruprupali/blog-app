import LoginForm from "@/components/LoginForm";

export default function Home() {
    // if (!LoginForm) {
    //     return <div>Error: LoginForm component not found.</div>;
    // }
    
    return (
        <main>
            <LoginForm />
        </main>
    );
}