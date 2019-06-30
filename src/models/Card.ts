import { TypeBrand, TypeCard } from "../enuns/Enuns";

export class Card {
  public CustomerName: string
  public CardNumber: string
  public Holder: string
  public ExpirationDate: string
  public Brand: TypeBrand

  constructor(customerName: string, cardNumber: string , holder: string , expirationDate: string , brand: TypeBrand) {
    this.CustomerName = customerName
    this.CardNumber = cardNumber
    this.Holder = holder
    this.ExpirationDate = expirationDate
    this.Brand = brand
  }

}

export interface CardBinResponse {
  Status: number
  Provider: TypeBrand
  CardType: TypeCard,
  ForeignCard: boolean
}

export interface cardTokerized {
  CardToken: string
}