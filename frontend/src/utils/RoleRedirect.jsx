

import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getDashboardByRole } from "./getDashboardByRole";

export default function RoleRedirect() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Navigate to={getDashboardByRole(user.role)} replace />;
}
