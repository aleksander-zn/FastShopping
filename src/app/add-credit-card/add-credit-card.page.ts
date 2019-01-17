import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CardDataServiceService } from '../services/card-data-service/card-data-service.service';

@Component({
    selector:  'app-add-credit-card',
    templateUrl: './add-credit-card.page.html',
    styleUrls:  ['./add-credit-card.page.scss'],
})
export class AddCreditCardPage implements OnInit {

    public cardData: { fname: string; lname: string; number: string; expirationDate: string; cvv: string } = {
        fname: '',
        lname: '',
        number: '',
        expirationDate: '',
        cvv: ''
    }

    constructor(
        private navCtrl: NavController,
        private cardDataService: CardDataServiceService
    ) { }
    ngOnInit() { }
    saveCardData() {
        this.cardDataService.addCard(this.cardData);
        this.navCtrl.goBack();
    }
}
