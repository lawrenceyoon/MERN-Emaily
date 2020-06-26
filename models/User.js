// dependencies
const mongoose = require('mongoose');
const { Schema } = mongoose;
// local files

const userSchema = new Schema({
  googleID: String,
  credits: {
    type: Number,
    default: 0
  }
});

mongoose.model("users", userSchema);
