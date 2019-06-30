import { TypeCountry, TypeCurrency } from "../enuns/Enuns";
import Customer from "./Customer";
export interface RecurentPayment {
    RecurrentPaymentId: string;
    NextRecurrency: string;
    StartDate: string;
    EndDate: string;
    Interval: string;
    Amount: number;
    Country: TypeCountry;
    CreateDate: Date;
    Currency: TypeCurrency;
    CurrentRecurrencyTry: number;
    Provider: string;
    RecurrencyDay: number;
    SuccessfulRecurrences: number;
    Status: number;
    RecurrentTransactions: RecurrentTransactions;
}
export interface RecurrentTransactions {
    PaymentId: string;
    PaymentNumber: number;
    TryNumber: number;
}
export interface RecurrentPaymentResponse {
    Customer: Customer;
    RecurrentPayment: RecurentPayment;
}
