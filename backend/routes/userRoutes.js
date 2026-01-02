//userRoutes.js (for easy identification created by my own ) ; 

const express = require("express");
const router = express.Router();

router.get("/me", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.json({ loggedIn: false });
  }

  res.json({
    loggedIn: true,
    user: {
      id: req.user._id,
      email: req.user.email,
      role: req.user.role
    }
  });
});

module.exports = router;
