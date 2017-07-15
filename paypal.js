//<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react.js"></script>
//<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react-dom.js"></script>
//<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.38/browser.js"></script>
//<script src="https://www.paypalobjects.com/api/checkout.js"></script>

//<div id="page"></div>
//Above is for using straight html


const customertotal = this.state.total;

let PayPalButton = paypal.Button.driver('react', { React, ReactDOM });

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            env: 'sandbox',
            client: {
                sandbox:    'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
                production: ''
            },
            style:  {
                label: 'checkout', // checkout | credit | pay
                size:  'small',    // small | medium | responsive
                shape: 'rect',     // pill | rect
                color: 'silver'      // gold | blue | silver
            },
            commit: true
        };
    }
    payment(data, actions) {
        return actions.payment.create({
            transactions: [
                {
                    amount: { total: customertotal, currency: 'USD' }
                }
            ]
        });
    }
    onAuthorize(data, actions) {
        return actions.payment.execute().then(function(paymentData) {
            // Show a success page to the buyer
        });
    }
    render() {
        return (
            <PayPalButton
                commit={ this.state.commit }
                env={ this.state.env }
                client={ this.state.client }
                payment={ (data, actions) => this.payment(data, actions) }
                onAuthorize={ (data, actions) => this.onAuthorize(data, actions) }
            />
        );
    }
}
ReactDOM.render(<Main />, document.querySelector('#page'));
