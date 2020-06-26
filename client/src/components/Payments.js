// dependencies
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
// local files
import * as actions from '../actions';

class Payments extends React.Component {
  getTokenID(token) {
    console.log(token);
  }

  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500}
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
      >
      <button className="ui teal button">Add Credits</button>
      </StripeCheckout>
    );
  };
};

export default connect(null, actions)(Payments);