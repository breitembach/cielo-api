import { TypeBrand, TypeCountry, TypeCurrency, TypeCustomerStatus, TypeCard } from "../enuns/Enuns";

export interface SaleRequest {
    MerchantOrderId: string
    Customer: {
      Name?: string,
      Status?: TypeCustomerStatus
    },  
    Payment: {  
      Type: string,
      Amount: number,
      Installments: number,
      CreditCard: {  
        CardToken: string,
        Brand: TypeBrand
      }
    }
}

export interface SaleResponse {
  MerchantOrderId: string,
  Customer: {
    Name?: string
  },
  Payment: PaymentResponse
}

export interface PaymentResponse {
  ServiceTaxAmount: number,
  Installments: number,
  Interest: number,
  Capture: boolean,
  Authenticate: boolean,
  Recurrent: boolean,
  CreditCard: {
    SaveCard: boolean,
    CardToken: string,
    Brand: TypeBrand
  },
  Tid: number,
  ProofOfSale: number,
  AuthorizationCode: number,
  Provider: string, // @TODO ENUM
  PaymentId: string,
  Type: string,
  Amount: number,
  ReceivedDate: Date
  Currency: TypeCurrency,
  Country: TypeCountry,
  ReturnCode: number,
  ReturnMessage: string
  Status: number,
}