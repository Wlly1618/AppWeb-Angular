import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { Detail } from 'src/app/models/detail';
import { Seller } from 'src/app/models/seller';
import { SaleService } from 'src/app/services/sale-service.service';

@Component({
  selector: 'app-form-sale',
  templateUrl: './form-sale.component.html',
  styleUrls: ['./form-sale.component.css']
})

export class FormSaleComponent implements OnInit {
  constructor(private dataService : SaleService) {
  }
  
  listDetail : Detail[] = [];

  client : Client = {
    "idClient" : 10,
    "dniClient" : "",
    "nameClient" : ""
  }

  seller : Seller = {
    "idSeller" : 1,
    "nameSeller" : ""
  }

  createInvoice(idClient : any, idSeller : any) {
    this.dataService.getClientById(idClient.value).subscribe(data => this.client = data)
    
    this.dataService.getSellerById(idSeller.value).subscribe(data => this.seller = data)

    return false
  }

  total = 0;

   createListDetail(idProd : any, amount : any) {
    this.dataService.getProductById(idProd.value).subscribe(data => {
      this.listDetail.push({"Product" : data, "amountProd" : amount.value})
      
      this.total += (data.priceProd * amount.value)
    })

    idProd.value = "";
    idProd.focus();

    return false;
  }

  deleteDetail(id : any) {
    for (let i=0; i < this.listDetail.length; i++) {
      if (id == this.listDetail[i].Product.idProduct) {
        this.total -= (this.listDetail[i].Product.priceProd * this.listDetail[i].amountProd)
        this.listDetail.splice(i,1);
      }
    }
  }

  deleteAllDetails() {
    let x = this.listDetail.length
    this.listDetail.splice(0,x)
    this.total = 0
  }

  clean(amount : any) {
    amount.value = '';
  }

  ngOnInit(): void {
  }

}
