import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import { AuthContext } from "../context/AuthContext";
import { getDashboardByRole } from "../utils/roleRedirect";

export default function Login() {
  const { user, loading } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // 🔒 Block logged-in users from seeing login page
  useEffect(() => {
    if (!loading && user) {
      navigate(getDashboardByRole(user.role), { replace: true });
    }
  }, [user, loading, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      // Backend already sets session cookie
      const role = res.data.user.role;

      navigate(getDashboardByRole(role), { replace: true });
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed"
      );
    }
  };

  if (loading) return <p>Checking session...</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Login</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
