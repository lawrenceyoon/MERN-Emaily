// dependencies
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
// local files
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");
const authRoutes = require("./routes/authRoutes");

// use mongoose to connect to MongoDB with our Express API
mongoose.connect(keys.mongoURI);

// create instance of express app
const app = express();

// tell passport to make use of cookies to handle auth
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// call in our routes
authRoutes(app);

// PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Turning up at ${PORT}!`));
