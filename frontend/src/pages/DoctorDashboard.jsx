import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function DoctorDashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div className="main-container">
      <div className="dashboard-card">
        <h1 className="dashboard-header">Doctor Dashboard</h1>

        <p className="welcome-text">
          Dr. {user.name || user.email.split("@")[0]}
          <br />
          Role: <strong>{user.role}</strong>
        </p>

        <button className="action-btn">View Patient Records</button>
      </div>
    </div>
  );
}
