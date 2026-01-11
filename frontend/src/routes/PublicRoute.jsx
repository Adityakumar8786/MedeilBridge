import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { getDashboardByRole } from "../utils/getDashboardByRole";

export default function PublicRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>;

  if (user) {
    if (user.role === "admin") return <Navigate to="/admin" />;
    if (user.role === "doctor") return <Navigate to="/doctor" />;
    return <Navigate to="/dashboard" />;
  }

  return children;
}
