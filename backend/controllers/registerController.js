const Patient = require("../models/Patient");

exports.registerPatient = async (req, res) => {
  try {
    const { name, phone, age, gender } = req.body;

    if (!name || !phone || !age || !gender) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const exists = await Patient.findOne({ phone });
    if (exists) {
      return res.status(409).json({ message: "Patient already registered" });
    }

    const secretId =
      "MIG-" + Math.random().toString(36).slice(2, 9).toUpperCase();

    const patient = await Patient.create({
      name,
      phone,
      age,
      gender,
      secretId,
    });

    res.status(201).json({
      message: "Registration successful",
      secretId: patient.secretId,
      patient,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
