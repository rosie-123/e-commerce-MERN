const { Router } = require("express");
const router = Router();
const passport = require('passport');

router.get("/current_user", (req, res) => {
    res.send(req.user);
});

module.exports = router;
