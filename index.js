const express = require("express");
const authRoutes = require("./routes/authRoutes");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport"); // tell passport to make use of cookies
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
