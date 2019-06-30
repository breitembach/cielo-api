import { TypeCountry, TypeCurrency, TypePayment } from "../enuns/Enuns";
import { Card } from "./Card";

export interface Payment {
  Type: TypePayment;
  Amount: number;
  Currency: TypeCurrency;
  Country: TypeCountry
  ServiceTaxAmount: number;
  Installments: number;
  Interest: string; //@TODO VER O QUE E ISSO
  Capture: boolean;
  Authenticate: boolean
  SoftDescriptor: string
  CreditCard: Card
}