import { Component } from '@angular/core';
import { SaleService } from './services/sale-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private saleService : SaleService) {
  }
}
