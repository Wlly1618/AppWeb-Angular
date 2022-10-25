import { Invoice } from "./invoice";
import { Product } from "./product";

export interface Detail {
    "Product" : Product;
    "amountProd" : number;
}

export interface DetailPost {
    "invoice" : Invoice;
    "product" : Product;
    "amountProd" : number;
}