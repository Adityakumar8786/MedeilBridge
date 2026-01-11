export function getDashboardByRole(role) {
  switch (role) {
    case "admin":
      return "/admin";
    case "doctor":
      return "/doctor";
    case "user":
      return "/dashboard";
    default:
      return "/unauthorized";
  }
}
