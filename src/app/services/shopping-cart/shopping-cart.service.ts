import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {

    public items: Array<{ title: string; price: number; src: string }> = [];

    constructor() {}

    public get isEmpty() {
        return this.items.length === 0;
    }

    public get total() {
        return this.items.map((item) => item.price).reduce((a, b) => a + b, 0);
    }

    wipe() {
        this.items.splice(0);
    }
}
