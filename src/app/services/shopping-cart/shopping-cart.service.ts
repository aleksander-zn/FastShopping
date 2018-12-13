import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {

    public items: Array<{ title: string; price: string; src: string }> = [];

    constructor() {}
}
