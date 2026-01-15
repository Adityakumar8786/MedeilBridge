export default function Unauthorized() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Access Denied</h2>
        <p>You don't have permission to view this page.</p>
        <p>Please login with appropriate credentials or contact support.</p>
      </div>
    </div>
  );
}