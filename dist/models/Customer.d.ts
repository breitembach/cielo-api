import { TypeCustomerStatus } from "../enuns/Enuns";
import { Address } from "./Address";
import DeliveryAddress from "./DeliveryAddress";
import { Payment } from "./Payment";
export default interface Customer {
    Name?: string;
    Email: string;
    BirthDate: string;
    Address: Address;
    DeliveryAddress: DeliveryAddress;
    Payment: Payment;
    Status?: TypeCustomerStatus;
}
