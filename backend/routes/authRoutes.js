const express = require("express") ; 
const router = express.Router();
const {register} = require("../controllers/authController") ; 
const {login} = require("../controllers/authController");
const {logout} = require("../controllers/authController");
const passport = require("passport");

router.post("/register",register);


// router.post(
//   "/login",
//   passport.authenticate("local", {
//     failureMessage: true
//   }),
//   login
// );


router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {

    // 2. Login failed → send the custom message from Passport!
    if (!user) {
      return res.status(401).json({
        success: false,
        message: info.message || "Login failed"  // ← This shows "Wrong password" or "User not found" !
      });
    }

    // 3. Login success → log user in and send data
    req.logIn(user, (err) => {
      if (err) return res.status(500).json({ message: "Login error" });

      return res.json({
        success: true,
        message: "Login successful",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role || "user"
        }
      });
    });
  })
  (req, res, next);
});

router.post("/logout", logout);

module.exports = router ; 
