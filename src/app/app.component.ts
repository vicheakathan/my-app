import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { API } from './services/api';
import { CountryModel } from './model/country';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ConfirmationService, MessageService, API]
})
export class AppComponent implements OnInit {

    listCountry: CountryModel[];

    country: CountryModel;

    displayDialog: boolean = false;

    selectedCountry: any;

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private _api: API) { }

    ngOnInit() {
        this._api.getData().then(data => this.listCountry = data);
    }

    showDialog(country: any) {
        this.selectedCountry = country;
        this.displayDialog = true;
    }

    closeDialog() {
        this.displayDialog = false;
        this.selectedCountry = null;
    }
}
