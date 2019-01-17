import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CardDataServiceService {
    cardData: Array<{ fname: string, lname: string, number: string, expirationDate: string, cvv: string }> = [
        {
            fname: 'Isabelle',
            lname: 'Hernandez',
            number: '4450882785266154',
            expirationDate: '11/2019',
            cvv: '834'
        },
    ];

    defaultCreditCardIdx = null;

    constructor() { }

    addCard(_cardData: { fname: string; lname: string; number: string; expirationDate: string; cvv: string }): void {
        this.cardData.push(_cardData);
    }

    visibleCardDetails: string[] = [
        'fname',
        'lname'
    ];
}
