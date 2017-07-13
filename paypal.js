
// This displays the Paypal button
// <script src="https://www.paypalobjects.com/api/checkout.js"></script>

// <div id="paypal-button-container"></div>

    // Render the PayPal button

    paypal.Button.render({

        // Env is set to sandbox instead of production because we don't have a business acct. We can mention in presentation that we can change this to a production env for real life.

        env: 'sandbox',

        // We can specify the style of the button. I liked rect and silver

        style: {
            label: 'checkout', // checkout | credit | pay
            size:  'small',    // small | medium | responsive
            shape: 'rect',     // pill | rect
            color: 'silver'      // gold | blue | silver
        },

        client: {
            sandbox:    'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R'
        },

        payment: function(data, actions) {
            return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: { total: '0.01', currency: 'USD' }
                        }
                    ]
                }
            });
        },

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#paypal-button-container');
