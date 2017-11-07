import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';


class Payments extends Component {
  render(){

    return (
      <StripeCheckout
      name="Emaily"
      description="$5 to 5 email"
      amount={500}
      token={ token => console.log(token) }
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn" >Add</button>
      </StripeCheckout>
      );
  }
}



export default Payments;
