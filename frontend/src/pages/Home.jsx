export default function Home() {
  return (
    <div className="dashboard-card">
      <h1 className="dashboard-header">
        Digital Health Records for Migrant Workers
      </h1>

      <p className="welcome-text">
        Secure • Anonymous • Multi-language • AI-guided
      </p>

      <ul style={{
        maxWidth: "600px",
        margin: "0 auto",
        color: "#374151",
        fontSize: "16px",
        lineHeight: "1.8"
      }}>
        <li>🩺 Over 70% migrant workers lack medical records</li>
        <li>🦠 More than 1000+ deaths daily from preventable diseases</li>
        <li>💊 Delayed diagnosis increases mortality by 60%</li>
        <li>📄 Paper records fail during migration and emergencies</li>
        <li>🚑 Instant access to history saves lives</li>
      </ul>
    </div>
  );
}
