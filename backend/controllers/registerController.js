const Patient = require("../models/Patient");

exports.registerPatient = async (req, res) => {
  try {
    const { name, age } = req.body || {};

    const secretId =
      "MIG-" + Math.random().toString(36).slice(2, 9).toUpperCase();

    const patient = new Patient({
      name,
      age,
      secretId,
    });

    await patient.save();

    return res.json({
      message: "registered",
      secretId,
      name,
      age,
    });
  } catch (err) {
    return res.status(500).json({ error: "Registration failed" });
  }
};
