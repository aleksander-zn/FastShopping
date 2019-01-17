import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CardDataServiceService } from '../services/card-data-service/card-data-service.service';

@Component({
    selector:  'app-settings',
    templateUrl: './settings.page.html',
    styleUrls:  ['./settings.page.scss'],
})
export class SettingsPage implements OnInit, OnDestroy {
    constructor(
        public cardDataService: CardDataServiceService,
        private navCtrl: NavController
    ) { }

    ngOnInit() {
        this.defaultCreditCard = this.cardDataService.defaultCreditCardIdx;
    }

    ngOnDestroy() {
        this.cardDataService.defaultCreditCardIdx = this.defaultCreditCard;
    }

    addCard() {
        console.log(this.defaultCreditCard);
        this.navCtrl.navigateForward('add-credit-card');
    }

    defaultCreditCard;
}
