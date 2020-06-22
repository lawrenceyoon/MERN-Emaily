// dependencies
const mongoose = require("mongoose");
const { Schema } = mongoose;
// local files

const userSchema = new Schema({
  googleID: String
});

mongoose.model("users", userSchema);
