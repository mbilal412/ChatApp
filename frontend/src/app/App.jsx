import router from "./app.routes";
import { RouterProvider } from "react-router";
import { ClerkProvider } from "@clerk/react";
import "./App.css";

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  if (!publishableKey) {
    return <p className="p-6 font-sans text-[#1e2521]">Missing VITE_CLERK_PUBLISHABLE_KEY in the frontend environment.</p>;
  }

  return (
    <ClerkProvider publishableKey={publishableKey}>
      <RouterProvider router={router} />
    </ClerkProvider>
  );
}

export default App;
