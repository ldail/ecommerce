import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    let stripePrice = price * 100;
    const publishableKey = 	'pk_test_1sfkoORkGAzykQQkTs6d0c1I0093c4Ehnb';

    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    }

    return (
        <StripeCheckout
            name="Crown Clothing"
            label="Pay now"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={stripePrice}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey} />
    );

}

export default StripeCheckoutButton;