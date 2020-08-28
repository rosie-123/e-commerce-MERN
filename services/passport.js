const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: keys.googleCallbackURL,
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleID: profile.id });
      if (existingUser) {
        // The user has been recorded with a unique id.
        return done(null, existingUser);
      } 
        const user = await new User({
          googleID: profile.id,
        }).save();
        done(null, user);
      
    }
  )
);
passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: keys.facebookCallbackURL,
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ facebookID: profile.id });
      if (existingUser) {
        // The user has been recorded with a unique id.
        return done(null, existingUser);
      } 
        const user = await new User({
          facebookID: profile.id,
        }).save();
        done(null, user);
      
    }
  )
);
