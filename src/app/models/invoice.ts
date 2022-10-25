import { Client } from "./client";
import { Seller } from "./seller";

export interface Invoice {
    "seller" : Seller;
    "client" : Client;
}

export interface InvoicePost {
    "id" : number;
    "seller" : Seller;
    "client" : Client;
}