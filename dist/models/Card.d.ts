import { TypeBrand, TypeCard } from "../enuns/Enuns";
export declare class Card {
    CustomerName: string;
    CardNumber: string;
    Holder: string;
    ExpirationDate: string;
    Brand: TypeBrand;
    constructor(customerName: string, cardNumber: string, holder: string, expirationDate: string, brand: TypeBrand);
}
export interface CardBinResponse {
    Status: number;
    Provider: TypeBrand;
    CardType: TypeCard;
    ForeignCard: boolean;
}
export interface cardTokerized {
    CardToken: string;
}
