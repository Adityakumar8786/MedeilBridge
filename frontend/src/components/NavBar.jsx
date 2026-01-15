import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
   <div
    style={{
      height: 70,
      padding: "0 40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "linear-gradient(90deg,#1769aa,#0f4c75)",
      color: "white"
    }}
  >
    <div style={{ fontSize: 24, fontWeight: "bold" }}>
      MediBridge
    </div>

    {/* RIGHT SIDE */}
    <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
      {!user ? (
        <>
          <button
            onClick={() => navigate("/login")}
            style={{
              background: "transparent",
              border: "1px solid white",
              color: "white",
              padding: "8px 16px",
              borderRadius: 6,
              cursor: "pointer"
            }}
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            style={{
              background: "#16a34a",
              border: "none",
              color: "white",
              padding: "8px 16px",
              borderRadius: 6,
              cursor: "pointer"
            }}
          >
            Register
          </button>
        </>
      ) : (
        <>
          <span>{user.email} ({user.role})</span>

          <button
            onClick={handleLogout}
            style={{
              background: "#dc2626",
              border: "none",
              color: "white",
              padding: "8px 16px",
              borderRadius: 6,
              cursor: "pointer"
            }}
          >
            Logout
          </button>
        </>
      )}
    </div>
  </div>
  );
}
