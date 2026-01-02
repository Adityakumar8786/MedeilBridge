import React, { useState } from "react";
import api from "../api/api";

export default function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [result, setResult] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setResult(null);

    try {
      const res = await api.post("/register", {
        name,
        phone,
        age,
        gender
      });

      setResult(res.data);
    } catch (err) {
      setResult({
        error: err.response?.data?.message || "Network error"
      });
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Patient Registration</h2>

      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <br /><br />

        <input placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
        <br /><br />

        <input placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
        <br /><br />

        <select value={gender} onChange={e => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <br /><br />

        <button type="submit">Register</button>
      </form>

      {result && (
        <div style={{ marginTop: 20 }}>
          {result.error ? (
            <p style={{ color: "red" }}>{result.error}</p>
          ) : (
            <>
              <p><b>Registered Successfully</b></p>
              <p><b>Secret ID:</b> {result.secretId}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
