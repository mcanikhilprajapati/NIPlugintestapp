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
            url: 'https://www.google.com',
            code: '100'
        };

        cordova.plugins.makePayment(param, (data) => {
            alert(data);
        }, (err) => {
            console.log(err);
            alert(err);
        });
    }

}
