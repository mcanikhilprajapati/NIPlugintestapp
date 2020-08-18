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
            url: 'https://api-gateway.sandbox.ngenius-payments.com/transactions/paymentAuthorization',
            code: '4568aa4baef1f53a'
        };

        cordova.plugins.makePayment(param, (data) => {
            alert(JSON.stringify(data));
        }, (err) => {
            console.log(err);
            alert(JSON.stringify(err));
        });
    }

}
