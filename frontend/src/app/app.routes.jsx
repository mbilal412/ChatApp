import {
  Navigate,
  createBrowserRouter,
  useLocation,
} from "react-router";
import Login from "../features/auth/pages/login.jsx";
import Register from "../features/auth/pages/register.jsx";
import Chat from "../features/chat/pages/chat.jsx";
import { useAuth } from "@clerk/react";

function ProtectedRoute({ children }) {
  const { isLoaded, isSignedIn } = useAuth();
  const location = useLocation();

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

  if (!isSignedIn) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return children;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/chat" replace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/chat",
    element: (
      <ProtectedRoute>
        <Chat />
      </ProtectedRoute>
    ),
  },
]);

export default router;
