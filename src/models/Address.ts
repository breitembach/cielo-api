import { TypeCountry } from "../enuns/Enuns";

export interface Address {
  Street: string;
  Number: number;
  Complement: string
  ZipCode: string
  City: string
  State: string,
  Country: TypeCountry
}