"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Card {
    constructor(customerName, cardNumber, holder, expirationDate, brand) {
        this.CustomerName = customerName;
        this.CardNumber = cardNumber;
        this.Holder = holder;
        this.ExpirationDate = expirationDate;
        this.Brand = brand;
    }
}
exports.Card = Card;
