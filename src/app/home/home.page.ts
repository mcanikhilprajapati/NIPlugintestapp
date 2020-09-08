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
            "_id": "urn:order:e7dd3962-f3af-43f8-887e-763feecc729e",
            "_links": {
                "cnp:payment-link": {
                    "href": "https://api-gateway.sandbox.ngenius-payments.com/transactions/outlets/445d36dc-2cca-4179-837a-cc4000f701d3/orders/e7dd3962-f3af-43f8-887e-763feecc729e/payment-link"
                },
                "payment-authorization": {
                    "href": "https://api-gateway.sandbox.ngenius-payments.com/transactions/paymentAuthorization"
                },
                "self": {
                    "href": "https://api-gateway.sandbox.ngenius-payments.com/transactions/outlets/445d36dc-2cca-4179-837a-cc4000f701d3/orders/e7dd3962-f3af-43f8-887e-763feecc729e"
                },
                "tenant-brand": {
                    "href": "http://config-service/config/outlets/445d36dc-2cca-4179-837a-cc4000f701d3/configs/tenant-brand"
                },
                "payment": {
                    "href": "https://paypage.sandbox.ngenius-payments.com/?code=b9761f8abb5fc686"
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
            "reference": "e7dd3962-f3af-43f8-887e-763feecc729e",
            "outletId": "445d36dc-2cca-4179-837a-cc4000f701d3",
            "createDateTime": "2020-09-08T16:33:14.802Z",
            "paymentMethods": {
                "card": [
                    "VISA",
                    "DINERS_CLUB_INTERNATIONAL",
                    "MASTERCARD",
                    "AMERICAN_EXPRESS",
                    "DISCOVER"
                ]
            },
            "referrer": "urn:Ecom:e7dd3962-f3af-43f8-887e-763feecc729e",
            "merchantOrderReference": "SO-0002",
            "formattedAmount": "د.إ.‏ 50",
            "formattedOrderSummary": {},
            "_embedded": {
                "payment": [
                    {
                        "_id": "urn:payment:d975d866-1af3-44c6-8296-807eb9791b2c",
                        "_links": {
                            "self": {
                                "href": "https://api-gateway.sandbox.ngenius-payments.com/transactions/outlets/445d36dc-2cca-4179-837a-cc4000f701d3/orders/e7dd3962-f3af-43f8-887e-763feecc729e/payments/d975d866-1af3-44c6-8296-807eb9791b2c"
                            },
                            "payment:card": {
                                "href": "https://api-gateway.sandbox.ngenius-payments.com/transactions/outlets/445d36dc-2cca-4179-837a-cc4000f701d3/orders/e7dd3962-f3af-43f8-887e-763feecc729e/payments/d975d866-1af3-44c6-8296-807eb9791b2c/card"
                            },
                            "payment:saved-card": {
                                "href": "https://api-gateway.sandbox.ngenius-payments.com/transactions/outlets/445d36dc-2cca-4179-837a-cc4000f701d3/orders/e7dd3962-f3af-43f8-887e-763feecc729e/payments/d975d866-1af3-44c6-8296-807eb9791b2c/saved-card"
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
                        "updateDateTime": "2020-09-08T16:33:14.802Z",
                        "outletId": "445d36dc-2cca-4179-837a-cc4000f701d3",
                        "orderReference": "e7dd3962-f3af-43f8-887e-763feecc729e",
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
