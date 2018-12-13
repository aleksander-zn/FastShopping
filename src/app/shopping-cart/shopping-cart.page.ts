import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ShoppingCartService } from '../services/shopping-cart/shopping-cart.service';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.page.html',
    styleUrls: ['./shopping-cart.page.scss']
})
export class ShoppingCartPage {

    constructor(
        private navCtrl: NavController,
        public cart: ShoppingCartService
    ) {}

    addProduct() {
        this.navCtrl.navigateForward('scan-barcode');
    }

    deleteItem(idx: number) {
        this.cart.items.splice(idx, 1);
    }
}
