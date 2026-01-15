import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
    await api.post("/auth/logout");
    navigate("/login");
    window.location.reload();
  };

  return (
    <div className="main-container">
      <div className="dashboard-card">
        <h1 className="dashboard-header">Dashboard</h1>
        <p className="welcome-text">{user.email}</p>
        <button className="logout-btn" onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
