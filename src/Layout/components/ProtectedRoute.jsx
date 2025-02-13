/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router";
import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="border-primary h-8 w-8 animate-spin rounded-full border-4 border-t-transparent"></div>
      </div>
    );
  }

  if (!user) {
    // Redirect to login page but save the attempted URL
    return <Navigate to="/admin" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
