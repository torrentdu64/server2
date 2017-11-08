const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {
      app.post('/api/stripe', async (req, res) => {

        if (!req.user){
          return req.status(401).send({error: 'Login defore'});
        }
         const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 to 5 credits',
            source: req.body.id
          });
         req.user.credits += 5;
         const user = await req.user.save();
         res.send(user);
      });
};
