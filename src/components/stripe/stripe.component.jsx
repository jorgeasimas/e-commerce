import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Stripe = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51JFtgwIiIAmt9SPG6HxSL42Y6aw04ZWi4bEsAxDS4qnvQ8d1zPWh3H9q0TYl52frbv0DcY3Rt4lEKWZPPQW1V9TW00uXkn3vjG';
    // this is copied from Stripe website API keys (developers tab)

    const onToken = token => {
        alert('Payment has been processed!');
    }


    return(
        <StripeCheckout
            label='Pay Now'
            name='Kite Shop Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />

    )
}

export default Stripe;