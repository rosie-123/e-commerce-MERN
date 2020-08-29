const passport = require("passport");
const { Router } = require("express");
const router = Router();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/404", successRedirect: "/" }));

router.get("/logout", (req, res) => {
  req.logOut();
  res.redirect('/');
});

router.get("/facebook", passport.authenticate("facebook"));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/404", successRedirect: "/" })
);

router.get("/current_user", (req, res) => {
  res.send(req.user);
});

module.exports = router;
