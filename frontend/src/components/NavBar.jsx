import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) return null;

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <span>{user.email} ({user.role})</span>
      <button onClick={handleLogout} style={{ marginLeft: "10px" }}>
        Logout
      </button>
    </div>
  );
}
