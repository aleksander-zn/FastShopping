import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CardDataServiceService } from '../../../services/card-data-service/card-data-service.service';

@Component({
    selector: 'app-credit-card-chooser',
    templateUrl: './credit-card-chooser.component.html',
    styleUrls: ['./credit-card-chooser.component.scss']
})
export class CreditCardChooserComponent implements OnInit {
    constructor(
        public cardDataService: CardDataServiceService,
        private modalCtrl: ModalController
    ) { }
    ngOnInit() { }
    dismiss() {
        this.modalCtrl.dismiss();
    }
}
