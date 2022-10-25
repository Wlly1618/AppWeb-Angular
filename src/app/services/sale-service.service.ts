import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Client } from '../models/client';
import { Product } from '../models/product';
import { Seller } from '../models/seller';
import { Invoice, InvoicePost } from '../models/invoice';
import { Detail, DetailPost } from '../models/detail';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private service : HttpClient) {
    console.log("service running")
  }

  getClient() {
    return this.service.get<Client[]>('http://localhost:8082/sale/client');
  }

  getClientById(id : number) {
    return this.service.get<Client>('http://localhost:8082/sale/client/query?id=' + id);
  }

  getProduct() {
    return this.service.get<Product[]>('http://localhost:8082/sale/product');
  }

  getProductById(id : number) {
    return this.service.get<Product>('http://localhost:8082/sale/product/query?id=' + id);
  }

  getSeller() {
    return this.service.get<Seller>('http://localhost:8082/sale/seller');
  }

  getSellerById(id : number) {
    return this.service.get<Seller>('http://localhost:8082/sale/seller/query?id=' + id);
  }

  postInvoice(invoice : Invoice) {
    return this.service.post<InvoicePost>('http://localhost:8082/sale/invoice', invoice)
  }

  postDetail(detail : DetailPost) {
    return this.service.post<Detail>('http://localhost:8082/sale/detail', detail)
  }

}
