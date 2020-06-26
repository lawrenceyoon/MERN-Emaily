// dependencies
const passport = require('passport');
// local files

// Route handlers
module.exports = (app) => {
  // kicks user into oauth flow first time
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // sees user with google code already, exchange code for profile now
  app.get(
    "/auth/google/callback", passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
