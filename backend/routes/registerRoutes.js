const express = require("express");
const router = express.Router();

const { registerPatient } = require("../controllers/registerController");

router.post("/register", registerPatient);

module.exports = router;
