import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { ShoppingCartService } from '../services/shopping-cart/shopping-cart.service';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.page.html',
    styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

    constructor(
        public cart: ShoppingCartService,
        private loadingCtrl: LoadingController,
        private navCtrl: NavController,
        private toastCtrl: ToastController
    ) { }

    ngOnInit() { }

    pay() {
        let loading = this.loadingCtrl.create({
            message: 'Pobieranie opłaty z karty...',
            duration: 3000
        });

        loading.then((val) => {
            val.present();
            val.onDidDismiss().then(() => {
                this.navCtrl.goBack();
                let toast = this.toastCtrl.create({
                    message: 'Opłata z karty została pobrana.',
                    duration: 3000,
                    position: 'bottom',
                    showCloseButton: true,
                    closeButtonText: 'OK'
                });
                toast.then((val) => {
                    val.present();
                })
                this.cart.wipe();
            });
        });
    }
}