import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function UserDashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div className="main-container">
      <div className="dashboard-card">
        <h1 className="dashboard-header">Patient Dashboard</h1>

        <p className="welcome-text">
          Welcome, {user.name || user.email}
          <br />
          Role: <strong>{user.role}</strong>
        </p>

        <button className="action-btn">View Health Records</button>
      </div>
    </div>
  );
}
