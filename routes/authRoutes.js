// dependencies
const passport = require("passport");
// local files

// Route handlers (HOME *)
module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send({
      firstName: "Lawrence",
      lastName: "Yoon",
      age: "27",
      DOB: "05/30/1993"
    });
  });

  // kicks user into oauth flow first time
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // sees user with google code already, exchange code for profile now
  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });
};
