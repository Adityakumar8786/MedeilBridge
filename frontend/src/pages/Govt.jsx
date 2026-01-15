import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

const overviewData = [
  { name: "Hospitals", value: 120 },
  { name: "Doctors", value: 860 },
  { name: "Patients", value: 5400 },
  { name: "Reports", value: 2300 }
];

const diseaseData = [
  { name: "Diabetes", value: 400 },
  { name: "BP", value: 300 },
  { name: "Cardiac", value: 200 },
  { name: "Other", value: 100 }
];

const COLORS = ["#1769aa", "#0f4c75", "#2e7d32", "#dc2626"];

export default function Govt() {
  const { user } = useContext(AuthContext);

  return (
    <div className="dashboard-card">
      <h1 className="dashboard-header">Government Dashboard</h1>

      <p className="welcome-text">
        Logged in as <strong>{user.email}</strong> ({user.role})
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 30 }}>
        <div style={{ height: 320 }}>
          <h3 style={{ textAlign: "center" }}>System Overview</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={overviewData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#1769aa" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div style={{ height: 320 }}>
          <h3 style={{ textAlign: "center" }}>Disease Distribution</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={diseaseData} dataKey="value" outerRadius={100}>
                {diseaseData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
