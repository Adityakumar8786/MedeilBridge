//statsRoutes.js (for easy identification created by my own ) ; 

const express = require("express");
const router = express.Router();
const {
  isAuthenticated,
  authorizeRoles
} = require("../middlewares/authMiddleware");

router.get(
  "/stats",
  isAuthenticated,
  authorizeRoles("govt"),
  (req, res) => {
    res.json({
      pieChart: {
        donors: 120,
        receivers: 80
      },
      table: [
        { hospital: "AIIMS", count: 30 },
        { hospital: "CMC", count: 20 }
      ]
    });
  }
);

module.exports = router;
