import { SignIn, useAuth } from "@clerk/react";
import { Navigate } from "react-router";

function Login() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return (
      <div className="grid min-h-screen place-items-center" role="status" aria-label="Loading">
        <span
          className="size-10.5 animate-spin rounded-full border-4 border-[#d8d4ca] border-t-[#526b58]"
          aria-hidden="true"
        />
      </div>
    );
  }

  if (isSignedIn) {
    return <Navigate to="/chat" replace />;
  }

  return (
    <main className="grid min-h-screen place-items-center bg-[radial-gradient(circle_at_15%_10%,#dfe8d8_0,transparent_35%),#f4f0e8] px-5 py-8">
      <SignIn
        routing="hash"
        signUpUrl="/register"
        fallbackRedirectUrl="/chat"
      />
    </main>
  );
}

export default Login;
