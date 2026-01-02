import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Dashboard from "./pages/DashBoard";
import Login from "./pages/Login";
import Unauthorized from "./pages/Unauthorized";
import Govt from "./pages/Govt";

function App() {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/govt"
          element={
            <ProtectedRoute role="govt">
              <Govt />
            </ProtectedRoute>
          }
        />

        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
  );
}

export default App;
