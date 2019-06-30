import { TypeBrand, TypeCountry, TypeCreditCard, TypeCurrency, TypeCustomerStatus } from "../enuns/Enuns";
export interface SaleRequest {
    MerchantOrderId: string;
    Customer: {
        Name?: string;
        Status?: TypeCustomerStatus;
    };
    Payment: {
        Type: TypeCreditCard;
        Amount: number;
        Installments: number;
        CreditCard: {
            CardToken: string;
            Brand: TypeBrand;
        };
    };
}
export interface SaleResponse {
    MerchantOrderId: string;
    Customer: {
        Name: string;
    };
    Payment: {
        ServiceTaxAmount: number;
        Installments: number;
        Interest: number;
        Capture: boolean;
        Authenticate: boolean;
        Recurrent: boolean;
        CreditCard: {
            SaveCard: boolean;
            CardToken: string;
            Brand: TypeBrand;
        };
        Tid: number;
        ProofOfSale: number;
        AuthorizationCode: number;
        Provider: string;
        PaymentId: string;
        Type: TypeCreditCard;
        Amount: number;
        ReceivedDate: Date;
        Currency: TypeCurrency;
        Country: TypeCountry;
        ReturnCode: number;
        ReturnMessage: string;
        Status: number;
    };
}
