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
       // alert('test');
        cordova.plugins.makePayment((data) => {
            console.log(data);
        }, (err) => {
            console.log(err);
        });
    }

}
