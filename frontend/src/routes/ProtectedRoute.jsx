import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children, allowedRoles }) {
  const { user, loading } = useContext(AuthContext);

  console.log("ProtectedRoute DEBUG:", {
    loading,
    hasUser: !!user,
    userRole: user?.role,
    expectedRoles: allowedRoles,
    path: window.location.pathname
  });

  if (loading) return <div style={{ textAlign: "center", padding: "100px" }}>Checking permission...</div>;

  if (!user) {
    console.log("ProtectedRoute → No user → go to login");
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    console.log(`ProtectedRoute → DENIED! Role "${user.role}" not in`, allowedRoles);
    return <Navigate to="/unauthorized" replace />;
  }

  console.log("ProtectedRoute → ALLOWED → showing content");
  return children;
}