const passport = require("passport");
const { Router } = require("express");
const router = Router();

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: "/404", successRedirect: "/" }));

router.get("/api/logout", (req, res) => {
  req.logOut();
  res.redirect('/');
});

router.get("/auth/facebook", passport.authenticate("facebook"));

router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/404", successRedirect: "/" })
);

router.get("/api/current_user", (req, res) => {
  res.send(req.user);
});

module.exports = router;
