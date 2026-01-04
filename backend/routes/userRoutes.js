const express = require("express");
const router = express.Router();

const isAuthenticated = require("../middlewares/isAuthenticated");
const authorizeRoles = require("../middlewares/authorizeRoles");
const ROLES = require("../constants/roles");

router.get("/me", isAuthenticated, (req, res) => {
  res.json({
    loggedIn: true,
    user: {
      id: req.user._id,
      email: req.user.email,
      role: req.user.role,
    },
  });
});

router.get(
  "/admin-only",
  isAuthenticated,
  authorizeRoles(ROLES.ADMIN),
  (req, res) => {
    res.json({ message: "Welcome Admin" });
  }
);

router.get(
  "/govt-only",
  isAuthenticated,
  authorizeRoles(ROLES.GOVT),
  (req, res) => {
    res.json({ message: "Welcome Government Officer" });
  }
);

module.exports = router;
