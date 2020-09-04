import {Component} from '@angular/core';


declare var cordova: any;

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})

export class HomePage {

    constructor() {

    }

    showAlert() {
        const param = {
            "_id": "urn:order:d9e45497-9a76-4fd5-8a48-c139fe43c853",
            "_links": {
                "cnp:payment-link": {
                    "href": "https://api-gateway.sandbox.ngenius-payments.com/transactions/outlets/445d36dc-2cca-4179-837a-cc4000f701d3/orders/d9e45497-9a76-4fd5-8a48-c139fe43c853/payment-link"
                },
                "payment-authorization": {
                    "href": "https://api-gateway.sandbox.ngenius-payments.com/transactions/paymentAuthorization"
                },
                "self": {
                    "href": "https://api-gateway.sandbox.ngenius-payments.com/transactions/outlets/445d36dc-2cca-4179-837a-cc4000f701d3/orders/d9e45497-9a76-4fd5-8a48-c139fe43c853"
                },
                "tenant-brand": {
                    "href": "http://config-service/config/outlets/445d36dc-2cca-4179-837a-cc4000f701d3/configs/tenant-brand"
                },
                "payment": {
                    "href": "https://paypage.sandbox.ngenius-payments.com/?code=5a6f1a1857771e12"
                },
                "merchant-brand": {
                    "href": "http://config-service/config/outlets/445d36dc-2cca-4179-837a-cc4000f701d3/configs/merchant-brand"
                }
            },
            "type": "SINGLE",
            "merchantDefinedData": {},
            "action": "SALE",
            "amount": {
                "currencyCode": "AED",
                "value": 5000
            },
            "language": "en",
            "merchantAttributes": {},
            "reference": "d9e45497-9a76-4fd5-8a48-c139fe43c853",
            "outletId": "445d36dc-2cca-4179-837a-cc4000f701d3",
            "createDateTime": "2020-09-03T17:31:18.769Z",
            "paymentMethods": {
                "card": [
                    "VISA",
                    "DINERS_CLUB_INTERNATIONAL",
                    "MASTERCARD",
                    "AMERICAN_EXPRESS",
                    "DISCOVER"
                ]
            },
            "referrer": "urn:Ecom:d9e45497-9a76-4fd5-8a48-c139fe43c853",
            "merchantOrderReference": "SO-0002",
            "formattedAmount": "د.إ.‏ 50",
            "formattedOrderSummary": {},
            "_embedded": {
                "payment": [
                    {
                        "_id": "urn:payment:b980fac1-4132-40d6-b49d-c3cac79b1764",
                        "_links": {
                            "self": {
                                "href": "https://api-gateway.sandbox.ngenius-payments.com/transactions/outlets/445d36dc-2cca-4179-837a-cc4000f701d3/orders/d9e45497-9a76-4fd5-8a48-c139fe43c853/payments/b980fac1-4132-40d6-b49d-c3cac79b1764"
                            },
                            "payment:card": {
                                "href": "https://api-gateway.sandbox.ngenius-payments.com/transactions/outlets/445d36dc-2cca-4179-837a-cc4000f701d3/orders/d9e45497-9a76-4fd5-8a48-c139fe43c853/payments/b980fac1-4132-40d6-b49d-c3cac79b1764/card"
                            },
                            "payment:saved-card": {
                                "href": "https://api-gateway.sandbox.ngenius-payments.com/transactions/outlets/445d36dc-2cca-4179-837a-cc4000f701d3/orders/d9e45497-9a76-4fd5-8a48-c139fe43c853/payments/b980fac1-4132-40d6-b49d-c3cac79b1764/saved-card"
                            },
                            "curies": [
                                {
                                    "name": "cnp",
                                    "href": "https://api-gateway.sandbox.ngenius-payments.com/docs/rels/{rel}",
                                    "templated": true
                                }
                            ]
                        },
                        "state": "STARTED",
                        "amount": {
                            "currencyCode": "AED",
                            "value": 5000
                        },
                        "updateDateTime": "2020-09-03T17:31:18.769Z",
                        "outletId": "445d36dc-2cca-4179-837a-cc4000f701d3",
                        "orderReference": "d9e45497-9a76-4fd5-8a48-c139fe43c853",
                        "merchantOrderReference": "SO-0002"
                    }
                ]
            }
        };

        cordova.plugins.makePayment(param, (data) => {
            alert(JSON.stringify(data));
        }, (err) => {
            console.log(err);
            alert(JSON.stringify(err));
        });
    }

}
