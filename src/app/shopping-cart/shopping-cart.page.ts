import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {

  public items: Array<{ title: string; price: string; src: string }> = [];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.items.push({
        title: 'Płatki śniadaniowe Nestlé Nesquik, 500 g',
        price: '6,99 zł',
        src: 'assets/images/cereal.jpg'
      });
    }
  }

  addProduct() {
    this.navCtrl.navigateForward('scan-barcode');
  }
}
