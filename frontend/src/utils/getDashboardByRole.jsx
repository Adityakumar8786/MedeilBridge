export function getDashboardByRole(role) {
  if (role === "govt") return "/govt";
  if (role === "doctor") return "/doctor";
  if (role === "patient") return "/patient";
  return "/unauthorized";
}
