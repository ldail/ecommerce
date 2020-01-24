import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
    let stripePrice = price * 100;
    const publishableKey = 	'pk_test_1sfkoORkGAzykQQkTs6d0c1I0093c4Ehnb';

    const onToken = token => {
        axios.post('payment', {
                amount: stripePrice,
                token
            }
        ).then(response => {
            alert('Payment successful!')
        }).catch(error => {
            console.log(error);
            console.log('Payment error: ', error);
            alert('There was an issue with your payment. Please make sure you use the provided credit card');
        })
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