import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProductGeneratorService {

    private products: Array<{title: string, price: string, src: string}> = [
        {
            title: 'Płatki śniadaniowe Nestlé Nesquik, 500 g',
            price: '6,99 zł',
            src: 'assets/images/cereal.jpg'
        },
        {
            title: 'Alpro Napój kokosowy z dodatkiem ryżu 1 l',
            price: '11,99 zł',
            src: 'assets/images/coconut.jpg'
        },
        {
            title: 'Ciastka korzenne, 350 g',
            price: '7,99 zł',
            src: 'assets/images/ciasteczka.jpg'
        },
        {
            title: 'Serek Danio, 135/140 g',
            price: '7,45 zł',
            src: 'assets/images/danio.jpg'
        },
    ]

    constructor() {}

    public generateRandomProduct() {
        let idx = Math.floor(Math.random() * this.products.length)
        let cpy = Object.assign({}, this.products[idx]);
        return cpy;
    }
}
