import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProductGeneratorService } from '../services/product-generator/product-generator.service';
import { ShoppingCartService } from '../services/shopping-cart/shopping-cart.service';

@Component({
    selector: 'app-scan-barcode',
    templateUrl: './scan-barcode.page.html',
    styleUrls: ['./scan-barcode.page.scss']
})
export class ScanBarcodePage implements OnInit {

    constructor(
        private cart: ShoppingCartService,
        private generator: ProductGeneratorService,
        private navCtrl: NavController
    ) { }

    ngOnInit() {
        setTimeout(() => {
            this.cart.items.push(this.generator.generateRandomProduct());
            this.navCtrl.goBack();
        }, 5000);
    }
}
