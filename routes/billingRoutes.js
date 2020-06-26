// local files (swapped around, because need to define keys first before accessing keys.stripeSecretKey);
const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');
// dependencies
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = (app) => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    // logic to handle token, reach out to stripe api and finalize actual charge; then update user's number of credits
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 credits",
      source: req.body.id
    });

    req.user.credits +=5;
    const user = await req.user.save();

    res.send(user);
  });
};